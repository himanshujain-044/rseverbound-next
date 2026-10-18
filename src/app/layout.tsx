import type { Metadata } from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';
import Navbar from '../components/layout/Navbar';
import './globals.css';
import Footer from '../components/layout/Footer';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'RS Ever Bound - Electrical Wires & Cables',
  description:
    'Explore electrical wires and cables from RS Ever Bound, including house wires, FRLSH wires, ZHFR wires, building wires, flame-retardant cables, and coaxial cables. Contact us for product details and enquiries.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-roboto">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
