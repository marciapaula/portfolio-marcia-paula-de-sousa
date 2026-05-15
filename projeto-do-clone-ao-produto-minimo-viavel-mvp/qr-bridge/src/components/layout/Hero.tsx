import { useThemeStore } from '../../store/useThemeStore';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { backgroundImage } = useThemeStore();
  const { t } = useTranslation();

  return (
    <div className={`${backgroundImage ? 'bg-white/30 dark:bg-black/40 backdrop-blur-md border-b border-white/30 dark:border-white/10' : 'bg-gradient-to-r from-white via-neutral-100 to-neutral-200 dark:from-black dark:via-neutral-900 dark:to-neutral-800 border-b border-neutral-200 dark:border-neutral-800'} text-neutral-900 dark:text-white py-20 px-6 text-left rounded-none shadow-none transition-all duration-500`}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">{t('hero.title')}</h1>
        <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-200 mb-2 font-light drop-shadow-md max-w-3xl">
          {t('hero.subtitle1')}
        </p>
      </div>
    </div>
  );
}
