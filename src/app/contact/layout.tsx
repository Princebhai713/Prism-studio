import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Prism Web Studio',
  description: 'Ready to scale? Contact our team of experts to start your project or book a discovery call today.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
