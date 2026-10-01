import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights & Blog | Prism Web Studio',
  description: 'Stay updated with the latest trends in web development, AI integration, and digital design from the Prism Web Studio team.',
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
