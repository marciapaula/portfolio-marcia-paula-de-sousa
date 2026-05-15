import { useState } from 'react';
import { useQrStore } from '../../store/useQrStore';
import { useTranslation } from 'react-i18next';

export function CornersDotOptions() {
  const { options, setNestedOption } = useQrStore();
  const [colorType, setColorType] = useState('single');
  const { t } = useTranslation();
  
  const handleClear = () => {
    setNestedOption('cornersDotOptions', 'color', undefined);
  };

  return (
    <div className="bg-[#f4f4f4] p-4 flex flex-col gap-4 border border-neutral-300 border-t-0">
      <div className="flex items-center gap-4">
        <label className="w-40 text-sm">{t('options.corners_dot_style')}</label>
        <select
          value={options.cornersDotOptions?.type || ''}
          onChange={(e) => setNestedOption('cornersDotOptions', 'type', e.target.value)}
          className="border border-neutral-400 p-1 text-sm outline-none bg-[#e0e0e0] w-40"
        >
          <option value="">{t('options.none')}</option>
          <option value="square">{t('options.square')}</option>
          <option value="dot">{t('options.dot')}</option>
        </select>
      </div>

      <div className="flex items-center gap-4">
        <label className="w-40 text-sm">{t('options.color_type')}</label>
        <div className="flex gap-8 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="cornersDotColorType" 
              value="single" 
              checked={colorType === 'single'} 
              onChange={() => setColorType('single')} 
            />
            {t('options.single_color')}
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="cornersDotColorType" 
              value="gradient" 
              checked={colorType === 'gradient'} 
              onChange={() => setColorType('gradient')} 
            />
            {t('options.color_gradient')}
          </label>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-2">
        <label className="w-40 text-sm">{t('options.corners_dot_color')}</label>
        <div className="flex-grow flex items-center justify-between">
          <div className="border border-neutral-400 p-[2px] bg-[#e0e0e0]">
            <input
              type="color"
              value={options.cornersDotOptions?.color || '#000000'}
              onChange={(e) => setNestedOption('cornersDotOptions', 'color', e.target.value)}
              className="w-10 h-6 block border-0 p-0 cursor-pointer bg-transparent"
            />
          </div>
          <button 
            onClick={handleClear}
            className="bg-[#e0e0e0] border border-neutral-400 px-4 py-1 text-sm hover:bg-neutral-300 cursor-pointer"
          >
            {t('options.clear')}
          </button>
        </div>
      </div>
    </div>
  );
}
