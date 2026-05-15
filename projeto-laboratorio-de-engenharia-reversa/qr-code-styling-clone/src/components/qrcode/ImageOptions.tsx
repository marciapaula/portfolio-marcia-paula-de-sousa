import { useQrStore } from '../../store/useQrStore';

export function ImageOptions() {
  const { options, setNestedOption } = useQrStore();
  
  return (
    <div className="bg-[#f4f4f4] p-4 flex flex-col gap-4 border border-neutral-300 border-t-0">
      <div className="flex items-center gap-4">
        <label className="w-32 text-sm">Hide Background Dots</label>
        <input
          type="checkbox"
          checked={options.imageOptions?.hideBackgroundDots || false}
          onChange={(e) => setNestedOption('imageOptions', 'hideBackgroundDots', e.target.checked)}
          className="cursor-pointer"
        />
      </div>
      <div className="flex items-center gap-4">
        <label className="w-32 text-sm">Image Size</label>
        <input
          type="number"
          step="0.1"
          min="0"
          max="1"
          value={options.imageOptions?.imageSize || 0.4}
          onChange={(e) => setNestedOption('imageOptions', 'imageSize', Number(e.target.value))}
          className="w-24 border border-neutral-400 p-1 text-sm outline-none"
        />
      </div>
      <div className="flex items-center gap-4">
        <label className="w-32 text-sm">Margin</label>
        <input
          type="number"
          value={options.imageOptions?.margin || 0}
          onChange={(e) => setNestedOption('imageOptions', 'margin', Number(e.target.value))}
          className="w-24 border border-neutral-400 p-1 text-sm outline-none"
        />
      </div>
    </div>
  );
}
