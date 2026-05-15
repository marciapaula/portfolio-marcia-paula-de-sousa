import { useState } from 'react';
import { useQrStore } from '../../store/useQrStore';

export function CornersSquareOptions() {
  const { options, setNestedOption } = useQrStore();
  const [colorType, setColorType] = useState('single');
  
  const handleClear = () => {
    // Remove a cor específica para herdar a cor dos pontos
    setNestedOption('cornersSquareOptions', 'color', undefined);
  };

  return (
    <div className="bg-[#f4f4f4] p-4 flex flex-col gap-4 border border-neutral-300 border-t-0">
      <div className="flex items-center gap-4">
        <label className="w-40 text-sm">Corners Square Style</label>
        <select
          value={options.cornersSquareOptions?.type || 'square'}
          onChange={(e) => setNestedOption('cornersSquareOptions', 'type', e.target.value)}
          className="border border-neutral-400 p-1 text-sm outline-none bg-[#e0e0e0] w-40"
        >
          <option value="">None</option>
          <option value="square">Square</option>
          <option value="dot">Dot</option>
          <option value="extra-rounded">Extra rounded</option>
        </select>
      </div>

      <div className="flex items-center gap-4">
        <label className="w-40 text-sm">Color Type</label>
        <div className="flex gap-8 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="cornersSquareColorType" 
              value="single" 
              checked={colorType === 'single'} 
              onChange={() => setColorType('single')} 
            />
            Single color
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="cornersSquareColorType" 
              value="gradient" 
              checked={colorType === 'gradient'} 
              onChange={() => setColorType('gradient')} 
            />
            Color gradient
          </label>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-2">
        <label className="w-40 text-sm">Corners Square Color</label>
        <div className="flex-grow flex items-center justify-between">
          <div className="border border-neutral-400 p-[2px] bg-[#e0e0e0]">
            <input
              type="color"
              value={options.cornersSquareOptions?.color || '#000000'}
              onChange={(e) => setNestedOption('cornersSquareOptions', 'color', e.target.value)}
              className="w-10 h-6 block border-0 p-0 cursor-pointer bg-transparent"
            />
          </div>
          <button 
            onClick={handleClear}
            className="bg-[#e0e0e0] border border-neutral-400 px-4 py-1 text-sm hover:bg-neutral-300 cursor-pointer"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
