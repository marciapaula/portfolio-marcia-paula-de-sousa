import { useThemeStore } from '../../store/useThemeStore';

export function Footer() {
  const { backgroundImage } = useThemeStore();

  return (
    <footer className={`${backgroundImage ? 'bg-white/50 dark:bg-black/70 backdrop-blur-md border-t border-white/30 dark:border-white/10' : 'bg-neutral-200 dark:bg-[#333333]'} text-neutral-600 dark:text-neutral-300 py-6 px-6 text-left rounded-none shadow-none mt-auto transition-all duration-500`}>
      <div className="max-w-5xl mx-auto">
        <p className="text-sm">
          © 2026 QR Bridge
        </p>
      </div>
    </footer>
  );
}
