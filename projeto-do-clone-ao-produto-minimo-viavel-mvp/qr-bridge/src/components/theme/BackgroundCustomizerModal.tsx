import { useState } from 'react';
import { X, Folder, Image as ImageIcon, ChevronRight, Save, Check } from 'lucide-react';
import { useThemeStore } from '../../store/useThemeStore';
import { useTranslation } from 'react-i18next';

const BACKGROUNDS = [
  { 
    id: 'india', 
    name: 'ÍNDIA', 
    url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80', 
    thumb: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=300&q=80', 
    filename: 'india-taj-mahal.jpg' 
  },
  { 
    id: 'brasil', 
    name: 'BRASIL', 
    url: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1920&q=80', 
    thumb: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=300&q=80', 
    filename: 'brasil-cristo.jpg' 
  },
  { 
    id: 'eua', 
    name: 'EUA', 
    url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1920&q=80', 
    thumb: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=300&q=80', 
    filename: 'eua-empire-state.jpg' 
  },
  { 
    id: 'canada', 
    name: 'CANADÁ', 
    url: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1920&q=80', 
    thumb: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=300&q=80', 
    filename: 'canada-toronto.jpg' 
  },
  { 
    id: 'londres', 
    name: 'LONDRES', 
    url: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1920&q=80', 
    thumb: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=300&q=80', 
    filename: 'londres-big-ben.jpg' 
  },
];

export function BackgroundCustomizerModal() {
  const { isCustomizerOpen, setCustomizerOpen, setBackgroundImage, backgroundImage } = useThemeStore();
  const { t } = useTranslation();
  
  // Local state for selection before confirming
  const [selectedBg, setSelectedBg] = useState<typeof BACKGROUNDS[0] | null>(
    BACKGROUNDS.find(bg => bg.url === backgroundImage) || null
  );

  if (!isCustomizerOpen) return null;

  const handleConfirm = () => {
    if (selectedBg) {
      setBackgroundImage(selectedBg.url);
      setCustomizerOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200">
        
        {/* Left Column: Gallery & Instructions */}
        <div className="flex-1 p-8 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
                {t('modal.title')}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-sm leading-relaxed max-w-2xl">
                {t('modal.desc')}
              </p>
            </div>
            <button 
              onClick={() => setCustomizerOpen(false)}
              className="p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors cursor-pointer md:hidden"
            >
              <X size={20} />
            </button>
          </div>

          {/* Gallery */}
          <div className="flex gap-4 overflow-x-auto pb-4 pt-2 snap-x hide-scrollbar">
            {BACKGROUNDS.map((bg) => {
              const isSelected = selectedBg?.id === bg.id;
              return (
                <button
                  key={bg.id}
                  onClick={() => setSelectedBg(bg)}
                  className="flex flex-col items-center gap-3 min-w-[140px] snap-center group cursor-pointer"
                >
                  <div className={`relative w-full aspect-[3/4] rounded-xl overflow-hidden transition-all duration-300 ease-out ${
                    isSelected ? 'ring-4 ring-purple-500 ring-offset-2 shadow-xl scale-105' : 'hover:shadow-lg hover:-translate-y-1'
                  }`}>
                    <img 
                      src={bg.thumb} 
                      alt={bg.name} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    {isSelected && (
                      <div className="absolute inset-0 bg-purple-500/20 flex items-center justify-center">
                        <div className="bg-purple-500 text-white p-1.5 rounded-full shadow-md">
                          <Check size={20} />
                        </div>
                      </div>
                    )}
                  </div>
                  <span className={`text-sm font-bold tracking-wider ${isSelected ? 'text-purple-700 dark:text-purple-400' : 'text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white'}`}>
                    {bg.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="mt-auto pt-8 flex justify-end">
            <button
              onClick={handleConfirm}
              disabled={!selectedBg}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all cursor-pointer ${
                selectedBg 
                  ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-md hover:shadow-lg' 
                  : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
              }`}
            >
              <Save size={18} />
              {t('modal.confirm')}
            </button>
          </div>
        </div>

        {/* Right Column: File Browser Simulation */}
        <div className="w-full md:w-80 bg-neutral-900 text-neutral-300 p-6 flex flex-col border-t md:border-t-0 md:border-l border-neutral-800 relative">
          <button 
            onClick={() => setCustomizerOpen(false)}
            className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-white hover:bg-neutral-800 rounded-full transition-colors cursor-pointer hidden md:block"
          >
            <X size={20} />
          </button>

          <h3 className="text-xs font-bold text-neutral-500 tracking-widest mb-6 mt-2">{t('modal.file_explorer')}</h3>
          
          <div className="font-mono text-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 text-neutral-400">
              <ChevronRight size={16} className="text-neutral-600" />
              <Folder size={16} className="text-blue-400" />
              <span>src</span>
            </div>
            
            <div className="flex items-center gap-2 text-white">
              <ChevronRight size={16} className="text-neutral-400 rotate-90 transition-transform" />
              <Folder size={16} className="text-blue-400" />
              <span>assets</span>
            </div>
            
            <div className="flex flex-col gap-2 pl-6 border-l border-neutral-800 ml-2 mt-1">
              <div className="flex items-center gap-2 text-white">
                <ChevronRight size={16} className="text-neutral-400 rotate-90 transition-transform" />
                <Folder size={16} className="text-blue-400" />
                <span>backgrounds</span>
              </div>
              
              <div className="flex flex-col gap-2 pl-6 border-l border-neutral-800 ml-2 mt-1">
                {selectedBg ? (
                  <div className="flex items-center gap-2 text-purple-400 bg-purple-500/10 px-2 py-1 -ml-2 rounded animate-in fade-in slide-in-from-left-2">
                    <ImageIcon size={16} />
                    <span className="truncate">{selectedBg.filename}</span>
                  </div>
                ) : (
                  <div className="text-neutral-600 italic text-xs py-1">
                    {t('modal.no_file')}
                  </div>
                )}
              </div>
            </div>
          </div>

          {selectedBg && (
            <div className="mt-auto pt-6 border-t border-neutral-800 animate-in fade-in">
              <p className="text-xs text-neutral-500 mb-2">{t('modal.file_preview')}</p>
              <div className="aspect-video rounded bg-neutral-800 overflow-hidden border border-neutral-700">
                <img 
                  src={selectedBg.thumb} 
                  alt="Preview" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[10px] text-neutral-500 mt-2 font-mono truncate">
                /assets/backgrounds/{selectedBg.filename}
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
