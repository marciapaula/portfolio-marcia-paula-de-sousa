import { AuthButton } from '../auth/AuthButton';
import { useThemeStore } from '../../store/useThemeStore';
import { Image as ImageIcon, Sun, Moon } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { useTranslation } from 'react-i18next';

export function Navbar() {
  const { setCustomizerOpen, backgroundImage, mode, toggleMode } = useThemeStore();
  const { t } = useTranslation();

  return (
    <nav className={`${backgroundImage ? 'bg-white/40 dark:bg-black/40 backdrop-blur-xl border-b border-white/30 dark:border-white/10' : 'bg-white dark:bg-black'} text-neutral-900 dark:text-white px-6 py-4 rounded-none shadow-none transition-all duration-500`}>
      <div className="max-w-5xl mx-auto flex justify-between items-center w-full">
        <div className="flex items-baseline gap-2">
          <span className="font-bold text-3xl tracking-wider">QR</span>
          <span className="font-normal text-xl tracking-wide">Bridge</span>
        </div>
        <div className="flex gap-4 sm:gap-6 items-center">
          <LanguageSelector />
          <button 
            onClick={toggleMode}
            className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full transition-colors cursor-pointer"
            title={mode === 'light' ? t('nav.dark_mode') : t('nav.light_mode')}
          >
            {mode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <div className="hidden sm:flex gap-4 items-center">
            <button 
              onClick={() => setCustomizerOpen(true)}
              className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 px-3 py-1.5 rounded transition-colors cursor-pointer"
            >
              <ImageIcon size={16} />
              {t('nav.customize')}
            </button>
            <a href="#" className="hover:underline text-sm text-neutral-600 dark:text-neutral-300">Github</a>
          </div>
          <AuthButton />
        </div>
      </div>
    </nav>
  );
}
