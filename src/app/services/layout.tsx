import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Prism Web Studio',
  description: 'Explore our agency-level web development, UI/UX design, custom SaaS engineering, and AI automation integration services.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
