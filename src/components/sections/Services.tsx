import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Globe, 
  RefreshCcw, 
  Settings, 
  Layers, 
  Palette, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { getServices } from '@/features/content/actions/content';

const ICON_MAP: Record<string, any> = {
  Globe: <Globe />,
  RefreshCcw: <RefreshCcw />,
  Settings: <Settings />,
  Layers: <Layers />,
  Palette: <Palette />,
  Zap: <Zap />,
};

export async function Services() {
  const data = await getServices();
  const services = data.slice(0, 3);

  return (
    <section id="services" className="py-24 bg-slate-50 min-h-[800px] md:min-h-[400px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Services</h2>
          <p className="text-slate-600 text-lg">
            We provide practical, scalable digital solutions for modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.length > 0 ? services.map((s, idx) => (
            <Card key={idx} className="flex flex-col bg-white border-slate-200 p-8 rounded-xl h-full shadow-none hover:border-slate-400 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-primary">
                  <div className="w-6 h-6 [&>svg]:w-full [&>svg]:h-full">
                    {ICON_MAP[s.icon_name] || <Layers />}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {s.title}
                </h3>
              </div>
              
              <div className="flex-1 mb-8">
                <p className="text-slate-600 text-base leading-relaxed line-clamp-3">
                  {s.description}
                </p>
              </div>
              
              <div className="flex justify-start">
                <Link href={`/services`} className="flex items-center space-x-2 text-primary hover:text-slate-900 transition-colors font-medium">
                  <span className="sr-only">Learn more about {s.title}</span>
                  <span aria-hidden="true">Learn more</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </Card>
          )) : (
            <div className="col-span-full text-center py-10 text-gray-500">No services registered in the database yet.</div>
          )}
        </div>

        <div className="mt-16 text-center">
          <Button asChild variant="outline" size="lg" className="px-8 h-12 text-base border-slate-300 text-slate-900 hover:bg-slate-100 hover:text-slate-900">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
