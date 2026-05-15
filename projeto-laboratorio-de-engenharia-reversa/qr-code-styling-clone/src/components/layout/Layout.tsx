import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f4f4] font-sans">
      <Navbar />
      <Hero />
      <main className="flex-grow w-full max-w-7xl mx-auto p-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}
