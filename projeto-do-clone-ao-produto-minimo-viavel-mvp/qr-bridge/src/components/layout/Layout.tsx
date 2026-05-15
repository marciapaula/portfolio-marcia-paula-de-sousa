import { ReactNode, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Footer } from './Footer';
import { BackgroundCustomizerModal } from '../theme/BackgroundCustomizerModal';
import { useThemeStore } from '../../store/useThemeStore';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { backgroundImage, mode } = useThemeStore();

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  return (
    <div 
      className="min-h-screen flex flex-col bg-[#f4f4f4] dark:bg-neutral-950 font-sans transition-all duration-500"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className={backgroundImage ? "bg-white/20 dark:bg-black/60 min-h-screen flex flex-col transition-colors duration-500" : "min-h-screen flex flex-col transition-colors duration-500"}>
        <Navbar />
        <Hero />
        <main className="flex-grow w-full max-w-7xl mx-auto p-6">
          {children}
        </main>
        <Footer />
      </div>
      <BackgroundCustomizerModal />
    </div>
  );
}
