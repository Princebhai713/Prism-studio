"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Calendar, 
  Heart, 
  MessageCircle, 
  Bookmark, 
  Share2,
  Clock,
  Send,
  ArrowRight,
  TrendingUp,
  Loader2
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { toggleLike, toggleBookmark, addComment, getBlogStats } from '@/features/blog/actions/blog-interactions';
import { format } from 'date-fns';
import { toast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { marked } from 'marked';

export function BlogPostClient({ post, relatedPosts }: { post: any, relatedPosts: any[] }) {
  const [stats, setStats] = useState<any>({ likeCount: 0, comments: [], userInteractions: { isLiked: false, isBookmarked: false } });
  const [commentForm, setCommentForm] = useState({ name: '', text: '' });
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);

  useEffect(() => {
    async function loadStats() {
      const visitorId = localStorage.getItem('prism_visitor_id') || 'anonymous';
      const s = await getBlogStats(post.id, visitorId);
      setStats(s);
    }
    loadStats();
  }, [post.id]);

  const handleLike = async () => {
    const visitorId = localStorage.getItem('prism_visitor_id') || 'anonymous';
    const res = await toggleLike(post.id, visitorId);
    if (res.success) {
      setStats((prev: any) => ({
        ...prev,
        likeCount: res.action === 'liked' ? prev.likeCount + 1 : prev.likeCount - 1,
        userInteractions: { ...prev.userInteractions, isLiked: res.action === 'liked' }
      }));
      toast({ title: res.action === 'liked' ? "Liked!" : "Removed Like" });
    }
  };

  const handleBookmark = async () => {
    const visitorId = localStorage.getItem('prism_visitor_id') || 'anonymous';
    const res = await toggleBookmark(post.id, visitorId);
    if (res.success) {
      setStats((prev: any) => ({
        ...prev,
        userInteractions: { ...prev.userInteractions, isBookmarked: res.action === 'bookmarked' }
      }));
      toast({ title: res.action === 'bookmarked' ? "Saved to Bookmarks" : "Removed from Bookmarks" });
    }
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentForm.name || !commentForm.text) return;
    setIsSubmittingComment(true);
    const res = await addComment(post.id, commentForm.name, commentForm.text);
    if (res.success) {
      toast({ title: "Comment Posted!" });
      setCommentForm({ name: '', text: '' });
      const visitorId = localStorage.getItem('prism_visitor_id') || 'anonymous';
      const updatedStats = await getBlogStats(post.id, visitorId);
      setStats(updatedStats);
    }
    setIsSubmittingComment(false);
  };

  const htmlContent = marked.parse(post.content || '');

  return (
    <article className="pt-36 pb-24 px-6 max-w-4xl mx-auto">
      <header className="space-y-6 mb-10 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-bold tracking-widest uppercase text-xs">
          <TrendingUp size={14} /> Insight: {post.category || 'Technology'}
        </div>
        <h1 className="font-headline text-4xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary/10 text-primary text-xs">
                {post.author_name ? post.author_name[0] : 'P'}
              </AvatarFallback>
            </Avatar>
            <span className="text-slate-900 font-bold">{post.author_name || 'Prism AI'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar size={16} className="text-primary" />
            {format(new Date(post.published_at || post.created_at), 'MMM d, yyyy')}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={16} className="text-slate-600" />
            <span>8 min read</span>
          </div>
        </div>
      </header>

      <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-8 border-8 border-slate-50 bg-slate-100">
        <Image src={post.image_url || 'https://picsum.photos/seed/article/1200/800'} alt={post.title} fill className="object-cover" priority />
      </div>

      <div className="flex items-center gap-4 py-6 border-y border-slate-100 mb-12 sticky top-20 bg-white/80 backdrop-blur-md z-30">
        <Button variant="ghost" size="sm" onClick={handleLike} className={cn("rounded-full gap-2 px-4 h-11", stats.userInteractions.isLiked ? "bg-primary/10 text-primary" : "text-slate-500")}>
          <Heart size={20} className={cn(stats.userInteractions.isLiked && "fill-current")} />
          <span className="font-bold">{stats.likeCount}</span>
        </Button>
        <Button variant="ghost" size="sm" className="rounded-full gap-2 px-4 h-11 text-slate-500" onClick={() => document.getElementById('discussion')?.scrollIntoView({ behavior: 'smooth' })}>
          <MessageCircle size={20} />
          <span className="font-bold">{stats.comments.length}</span>
        </Button>
        <Button variant="ghost" size="icon" onClick={handleBookmark} className={cn("rounded-full h-11 w-11", stats.userInteractions.isBookmarked ? "bg-primary/10 text-primary" : "text-slate-500")}>
          <Bookmark size={20} className={cn(stats.userInteractions.isBookmarked && "fill-current")} />
        </Button>
      </div>

      <section className="prose prose-slate prose-lg max-w-none text-slate-600 font-body leading-relaxed" dangerouslySetInnerHTML={{ __html: htmlContent }} />

      <section id="discussion" className="mt-24 pt-12 border-t border-slate-100">
        <h2 className="font-headline text-3xl font-bold text-slate-900 mb-10">Discussion</h2>
        <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 mb-12 border border-slate-100">
          <form onSubmit={handleCommentSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Your Name" value={commentForm.name} onChange={e => setCommentForm(prev => ({ ...prev, name: e.target.value }))} className="bg-white h-14 rounded-xl" required />
              <Input placeholder="Email" type="email" className="bg-white h-14 rounded-xl" required />
            </div>
            <Textarea placeholder="Share your thoughts..." value={commentForm.text} onChange={e => setCommentForm(prev => ({ ...prev, text: e.target.value }))} className="bg-white min-h-[120px] rounded-xl" required />
            <Button disabled={isSubmittingComment} className="w-full rounded-full bg-primary hover:bg-primary/90 h-16 text-lg font-bold text-white shadow-lg">
              {isSubmittingComment ? <Loader2 className="animate-spin" /> : <><Send size={18} className="mr-2" /> Post Comment</>}
            </Button>
          </form>
        </div>

        <div className="space-y-8">
          {stats.comments.map((c: any) => (
            <div key={c.id} className="p-8 rounded-[2rem] border border-slate-100 bg-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">{c.author_name[0]}</div>
                <div>
                  <span className="font-bold text-slate-900 block">{c.author_name}</span>
                  <span className="text-[10px] text-slate-600 uppercase">{format(new Date(c.created_at), 'MMM d, yyyy')}</span>
                </div>
              </div>
              <p className="text-slate-600">{c.content}</p>
            </div>
          ))}
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="mt-32 pt-12 border-t border-slate-100">
          <h2 className="font-headline text-3xl font-bold text-slate-900 mb-12">Related Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((rp) => (
              <Link key={rp.id} href={`/blog/${rp.slug}`} className="group block">
                <Card className="h-full border-slate-100 rounded-[2rem] overflow-hidden hover:shadow-xl transition-all">
                  <div className="relative h-40 overflow-hidden">
                    <Image src={rp.image_url || 'https://picsum.photos/seed/rp/600/400'} alt={rp.title} fill className="object-cover transition-transform group-hover:scale-110" />
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <p className="text-primary text-[10px] font-bold uppercase">{rp.category}</p>
                    <h3 className="font-headline font-bold text-slate-900 line-clamp-2">{rp.title}</h3>
                    <div className="pt-2 flex items-center text-xs text-slate-600 font-bold gap-2">
                      Read Article <ArrowRight size={12} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
