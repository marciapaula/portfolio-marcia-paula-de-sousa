import { useAuthStore } from '../../store/useAuthStore';
import { signInWithGoogle, signOutUser } from '../../services/authService';
import { LogIn, LogOut } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function AuthButton() {
  const { user, isLoading } = useAuthStore();
  const { t } = useTranslation();

  if (isLoading) {
    return <div className="h-8 w-24 bg-neutral-800 animate-pulse rounded-md"></div>;
  }

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {user.photoURL ? (
            <img 
              src={user.photoURL} 
              alt={user.displayName || 'User'} 
              className="w-8 h-8 rounded-full border border-neutral-700" 
              referrerPolicy="no-referrer" 
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-sm font-medium text-white">
              {user.email?.[0].toUpperCase()}
            </div>
          )}
          <span className="text-sm font-medium text-neutral-300 hidden sm:block">
            {user.displayName || user.email}
          </span>
        </div>
        <button
          onClick={signOutUser}
          className="flex items-center gap-2 px-3 py-1.5 text-sm text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-md transition-colors cursor-pointer"
          title={t('auth.logout')}
        >
          <LogOut size={16} />
          <span className="hidden sm:block">{t('auth.logout')}</span>
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={signInWithGoogle}
      className="flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-black text-sm font-medium rounded-md hover:bg-purple-600 dark:hover:bg-purple-200 transition-colors cursor-pointer shadow-sm"
    >
      <LogIn size={16} />
      {t('auth.login')}
    </button>
  );
}
