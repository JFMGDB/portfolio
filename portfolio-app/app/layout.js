import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Poppins, Aldrich } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins', 
});

const aldrich = Aldrich({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-aldrich', 
});

export const metadata = {
  title: 'José Felipe M. G. de Barros - Desenvolvedor Back-end',
  description: 'Portfólio de José Felipe, desenvolvedor Back-end com foco em Node.js, apresentando projetos, experiência e habilidades.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${aldrich.variable}`}>
      <body>
        <Header />
        <main className="container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}