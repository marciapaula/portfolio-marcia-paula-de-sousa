import { useState } from 'react';
import { useQrStore } from '../../store/useQrStore';
import { useTranslation } from 'react-i18next';

export function BackgroundOptions() {
  const { options, setNestedOption } = useQrStore();
  const [colorType, setColorType] = useState('single');
  const { t } = useTranslation();
  
  return (
    <div className="bg-[#f4f4f4] p-4 flex flex-col gap-4 border border-neutral-300 border-t-0">
      <div className="flex items-center gap-4">
        <label className="w-40 text-sm">{t('options.color_type')}</label>
        <div className="flex gap-8 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="backgroundColorType" 
              value="single" 
              checked={colorType === 'single'} 
              onChange={() => setColorType('single')} 
            />
            {t('options.single_color')}
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="backgroundColorType" 
              value="gradient" 
              checked={colorType === 'gradient'} 
              onChange={() => setColorType('gradient')} 
            />
            {t('options.color_gradient')}
          </label>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-2">
        <label className="w-40 text-sm">{t('options.bg_color')}</label>
        <div className="border border-neutral-400 p-[2px] bg-[#e0e0e0]">
          <input
            type="color"
            value={options.backgroundOptions?.color || '#ffffff'}
            onChange={(e) => setNestedOption('backgroundOptions', 'color', e.target.value)}
            className="w-10 h-6 block border-0 p-0 cursor-pointer bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}
