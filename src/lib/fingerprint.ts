'use client';

/**
 * Generates a unique hardware/browser fingerprint without using third-party cookies.
 * Collects 20+ data points to create a stable identity hash (Identity Resolution Phase 1).
 */
export async function generateFingerprint(): Promise<string> {
  if (typeof window === 'undefined') return '';

  const getWebGLInfo = () => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return { vendor: 'unknown', renderer: 'unknown' };
    const debugInfo = (gl as WebGLRenderingContext).getExtension('WEBGL_debug_renderer_info');
    return debugInfo ? {
      vendor: (gl as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
      renderer: (gl as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
    } : { vendor: 'unknown', renderer: 'unknown' };
  };

  const data: Record<string, any> = {
    screen: `${window.screen.width}x${window.screen.height}x${window.screen.colorDepth}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    language: navigator.language,
    platform: navigator.platform,
    hardwareConcurrency: navigator.hardwareConcurrency || 'unknown',
    deviceMemory: (navigator as any).deviceMemory || 'unknown',
    maxTouchPoints: navigator.maxTouchPoints || 0,
    pdfViewerEnabled: navigator.pdfViewerEnabled || false,
    fonts: getFonts(),
    canvas: getCanvasFingerprint(),
    audio: await getAudioFingerprint(),
    webgl: getWebGLInfo(),
    architecture: (navigator as any).platform || 'unknown',
    colorDepth: window.screen.colorDepth,
    pixelRatio: window.devicePixelRatio,
    doNotTrack: navigator.doNotTrack || 'unspecified'
  };

  const hashString = JSON.stringify(data);
  return await sha256(hashString);
}

function getFonts() {
  const fontList = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana', 'Impact', 'Comic Sans MS', 'Trebuchet MS', 'Arial Black', 'Palatino'];
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return [];
  
  return fontList.filter(font => {
    ctx.font = '72px ' + font;
    const width = ctx.measureText('mmmmmmmmmmlli').width;
    ctx.font = '72px sans-serif';
    const baseWidth = ctx.measureText('mmmmmmmmmmlli').width;
    return width !== baseWidth;
  });
}

function getCanvasFingerprint() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return 'no-canvas';
  
  canvas.width = 200;
  canvas.height = 50;
  ctx.textBaseline = 'top';
  ctx.font = "14px 'Arial'";
  ctx.fillStyle = '#f60';
  ctx.fillRect(125, 1, 62, 20);
  ctx.fillStyle = '#069';
  ctx.fillText('PrismStudioIdentity, <canvas> 1.0', 2, 15);
  ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
  ctx.fillText('PrismStudioIdentity, <canvas> 1.0', 4, 17);
  
  return canvas.toDataURL();
}

async function getAudioFingerprint(): Promise<string> {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return 'no-audio';
    
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    const analyser = context.createAnalyser();
    const gain = context.createGain();
    
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(10000, context.currentTime);
    gain.gain.setValueAtTime(0, context.currentTime);
    
    oscillator.connect(gain);
    gain.connect(analyser);
    oscillator.start(0);
    
    const buffer = new Float32Array(analyser.frequencyBinCount);
    analyser.getFloatFrequencyData(buffer);
    oscillator.stop();
    context.close();
    
    return buffer.slice(0, 10).join(',');
  } catch (e) {
    return 'audio-error';
  }
}

async function sha256(message: string) {
  const msgUint8 = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
