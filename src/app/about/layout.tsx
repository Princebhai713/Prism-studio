import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Prism Web Studio',
  description: 'Learn about Prism Web Studio, a collective of designers and engineers building modern digital solutions for high-growth businesses.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
