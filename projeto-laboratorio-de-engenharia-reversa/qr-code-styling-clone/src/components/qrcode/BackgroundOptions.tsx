import { useState } from 'react';
import { useQrStore } from '../../store/useQrStore';

export function BackgroundOptions() {
  const { options, setNestedOption } = useQrStore();
  const [colorType, setColorType] = useState('single');
  
  return (
    <div className="bg-[#f4f4f4] p-4 flex flex-col gap-4 border border-neutral-300 border-t-0">
      <div className="flex items-center gap-4">
        <label className="w-40 text-sm">Color Type</label>
        <div className="flex gap-8 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="backgroundColorType" 
              value="single" 
              checked={colorType === 'single'} 
              onChange={() => setColorType('single')} 
            />
            Single color
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="backgroundColorType" 
              value="gradient" 
              checked={colorType === 'gradient'} 
              onChange={() => setColorType('gradient')} 
            />
            Color gradient
          </label>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-2">
        <label className="w-40 text-sm">Background Color</label>
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
