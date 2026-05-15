import React, { useState, useEffect } from 'react';
import { useQrStore } from '../../store/useQrStore';
import { useAuthStore } from '../../store/useAuthStore';
import { saveConfiguration, getUserHistory, deleteConfiguration, SavedConfig } from '../../services/historyService';
import { useTranslation } from 'react-i18next';
import { Save, Trash2, DownloadCloud } from 'lucide-react';
import { useThemeStore } from '../../store/useThemeStore';

export function HistoryPanel() {
  const { options, setOptions } = useQrStore();
  const { user } = useAuthStore();
  const { t } = useTranslation();
  const { backgroundImage } = useThemeStore();
  
  const [history, setHistory] = useState<SavedConfig[]>([]);
  const [loading, setLoading] = useState(false);
  const [configName, setConfigName] = useState('');
  const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (user) {
      loadHistory();
    } else {
      setHistory([]);
    }
  }, [user]);

  const loadHistory = async () => {
    if (!user) return;
    setLoading(true);
    const data = await getUserHistory(user.uid);
    setHistory(data);
    setLoading(false);
  };

  const handleSave = async () => {
    if (!user) return;
    setStatus('saving');
    const nameToSave = configName.trim() || `Config ${new Date().toLocaleDateString()}`;
    const result = await saveConfiguration(user.uid, options, nameToSave);
    
    if (result.success) {
      setStatus('success');
      setConfigName('');
      await loadHistory();
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      setStatus('error');
    }
  };

  const handleDelete = async (id: string) => {
    await deleteConfiguration(id);
    await loadHistory();
  };

  const handleLoad = (savedOptions: any) => {
    setOptions(savedOptions);
  };

  if (!user) {
    return (
      <div className="p-4 text-center text-neutral-500 dark:text-neutral-400 text-sm italic">
        Please login to save and load your configurations.
      </div>
    );
  }

  const inputClasses = `flex-1 p-2 text-sm rounded-lg outline-none transition-all duration-300 ${
    backgroundImage 
      ? 'bg-white/50 dark:bg-black/50 backdrop-blur-md border border-white/40 dark:border-white/10 focus:bg-white/70 dark:focus:bg-black/70 placeholder-neutral-500 dark:placeholder-neutral-400' 
      : 'bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:bg-white dark:focus:bg-neutral-900 placeholder-neutral-500'
  }`;

  return (
    <div className="flex flex-col gap-4 p-2">
      <div className="flex gap-2">
        <input 
          type="text" 
          value={configName}
          onChange={(e) => setConfigName(e.target.value)}
          placeholder="Configuration name..."
          className={inputClasses}
        />
        <button 
          onClick={handleSave}
          disabled={status === 'saving'}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 shadow-sm hover:shadow-md"
        >
          <Save size={16} />
          {status === 'saving' ? 'Saving...' : 'Save'}
        </button>
      </div>
      
      {status === 'success' && <p className="text-green-600 dark:text-green-400 text-xs font-medium">Saved successfully!</p>}
      {status === 'error' && <p className="text-red-600 dark:text-red-400 text-xs font-medium">Error saving configuration.</p>}

      <div className="mt-2">
        <h4 className="text-sm font-semibold mb-3 text-neutral-700 dark:text-neutral-300">Your Saved Configurations</h4>
        {loading ? (
          <p className="text-sm text-neutral-500">Loading...</p>
        ) : history.length === 0 ? (
          <p className="text-sm text-neutral-500 italic">No saved configurations yet.</p>
        ) : (
          <div className="flex flex-col gap-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
            {history.map((item) => (
              <div key={item.id} className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                backgroundImage
                  ? 'bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/30 dark:border-white/10 hover:bg-white/60 dark:hover:bg-black/60'
                  : 'bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-800'
              }`}>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{item.name}</span>
                  <span className="text-xs text-neutral-500">{new Date(item.createdAt).toLocaleString()}</span>
                </div>
                <div className="flex gap-1">
                  <button 
                    onClick={() => handleLoad(item.options)}
                    className="p-2 text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                    title="Load Configuration"
                  >
                    <DownloadCloud size={16} />
                  </button>
                  <button 
                    onClick={() => item.id && handleDelete(item.id)}
                    className="p-2 text-red-600 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                    title="Delete Configuration"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
