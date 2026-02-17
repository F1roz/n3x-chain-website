import { Inter, Londrina_Outline } from 'next/font/google';
import './globals.css';
import Header from './(site)/component/layout/Header';
import Footer from './(site)/component/layout/Footer';

const inter = Inter({ subsets: ['latin'] });
const londrinaOutline = Londrina_Outline({
  subsets: ['latin'],
  weight: '400',
});

export const metadata = {
  title: 'N3X Chain',
  description: 'N3X Chain',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${londrinaOutline.className} bg-[#111014] `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
