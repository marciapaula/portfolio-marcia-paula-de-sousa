import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '../../store/useThemeStore';

const LANGUAGES = [
  { code: 'en', name: 'English', country: 'gb' },
  { code: 'zh', name: '中文', country: 'cn' },
  { code: 'hi', name: 'हिन्दी', country: 'in' },
  { code: 'es', name: 'Español', country: 'es' },
  { code: 'fr', name: 'Français', country: 'fr' },
  { code: 'ar', name: 'العربية', country: 'sa' },
  { code: 'bn', name: 'বাংলা', country: 'bd' },
  { code: 'ru', name: 'Русский', country: 'ru' },
  { code: 'pt', name: 'Português', country: 'br' },
  { code: 'id', name: 'Bahasa Indonesia', country: 'id' },
  { code: 'ur', name: 'اردو', country: 'pk' },
  { code: 'de', name: 'Deutsch', country: 'de' },
  { code: 'ja', name: '日本語', country: 'jp' },
  { code: 'sw', name: 'Kiswahili', country: 'ke' },
  { code: 'mr', name: 'मराठी', country: 'in' },
  { code: 'te', name: 'తెలుగు', country: 'in' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', country: 'pk' },
  { code: 'wuu', name: '吴语', country: 'cn' },
  { code: 'ta', name: 'தமிழ்', country: 'in' },
  { code: 'tr', name: 'Türkçe', country: 'tr' },
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { backgroundImage } = useThemeStore();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-300 cursor-pointer"
      >
        <Globe size={18} />
        <span className="hidden sm:inline">{t('nav.translate')}</span>
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className={`absolute top-full right-0 mt-2 w-64 max-h-80 overflow-y-auto custom-scrollbar rounded-xl shadow-2xl border transition-all duration-300 z-50 animate-in fade-in slide-in-from-top-2 ${
          backgroundImage 
            ? 'bg-white/70 dark:bg-black/70 backdrop-blur-xl border-white/30 dark:border-white/10' 
            : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800'
        }`}>
          <div className="p-2 flex flex-col gap-1">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors cursor-pointer ${
                  i18n.language === lang.code 
                    ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 font-medium' 
                    : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                <img 
                  src={`https://flagcdn.com/w20/${lang.country}.png`} 
                  srcSet={`https://flagcdn.com/w40/${lang.country}.png 2x`}
                  width="20" 
                  alt={`${lang.name} flag`}
                  className="rounded-sm shadow-sm"
                />
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
