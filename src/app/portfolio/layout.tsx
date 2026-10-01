import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Portfolio | Prism Web Studio',
  description: 'View our recent projects, case studies, and see how we help businesses scale with custom digital solutions.',
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
