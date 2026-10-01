import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const TEAM = [
  {
    name: 'Satyarth Maurya',
    role: 'Founder & Lead Engineer',
    bio: 'Full-stack developer and AI automation expert with a passion for building scalable, high-performance web applications.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400&auto=format&fit=crop', // Placeholder professional photo
    linkedin: '#',
    twitter: '#'
  }
];

export function AboutTeam() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-slate-900">
              The Humans Behind the Code
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Prism Web Studio isn't just an agency; it's a dedicated team of engineers, designers, and AI specialists. We believe in building digital solutions that actually move the needle for your business, skipping the corporate fluff and focusing on pure performance and conversions.
            </p>
            <div className="pt-6 border-t border-slate-100 flex items-center gap-12">
              <div>
                <p className="text-4xl font-headline font-bold text-slate-900">100%</p>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">In-House Team</p>
              </div>
              <div>
                <p className="text-4xl font-headline font-bold text-slate-900">24/7</p>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Direct Support</p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-sm mx-auto">
            {TEAM.map((member, idx) => (
              <Card key={idx} className="border-none shadow-2xl rounded-[2rem] overflow-hidden bg-slate-50">
                <div className="relative h-80 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 text-center space-y-4">
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-slate-900">{member.name}</h3>
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mt-1">{member.role}</p>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                  <div className="flex justify-center gap-4 pt-4">
                    <Link href={member.linkedin} className="text-slate-400 hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link href={member.twitter} className="text-slate-400 hover:text-primary transition-colors">
                      <Twitter className="w-5 h-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
