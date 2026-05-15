import { ChangeEvent } from 'react';
import { useQrStore } from '../../store/useQrStore';

export function MainOptions() {
  const { options, setOption } = useQrStore();

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setOption('image', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCancelImage = () => {
    setOption('image', '');
    const fileInput = document.getElementById('image-upload-input') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  return (
    <div className="bg-[#f4f4f4] p-4 flex flex-col gap-4 border border-neutral-300 border-t-0">
      <div className="flex items-start gap-4">
        <label className="w-24 text-sm pt-1">Data</label>
        <textarea 
          className="flex-grow border border-neutral-400 p-1 text-sm resize-y min-h-[60px] outline-none"
          value={options.data}
          onChange={(e) => setOption('data', e.target.value)}
        />
      </div>
      <div className="flex items-center gap-4">
        <label className="w-24 text-sm">Image File</label>
        <div className="flex-grow flex items-center gap-2">
          <input 
            id="image-upload-input"
            type="file" 
            accept="image/*"
            onChange={handleImageUpload}
            className="text-sm" 
          />
          <button 
            onClick={handleCancelImage}
            className="bg-[#e0e0e0] border border-neutral-400 px-3 py-1 text-sm hover:bg-neutral-300 ml-auto cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <label className="w-24 text-sm">Width</label>
        <input 
          type="number" 
          value={options.width}
          onChange={(e) => setOption('width', Number(e.target.value))}
          className="w-24 border border-neutral-400 p-1 text-sm outline-none" 
        />
      </div>
      <div className="flex items-center gap-4">
        <label className="w-24 text-sm">Height</label>
        <input 
          type="number" 
          value={options.height}
          onChange={(e) => setOption('height', Number(e.target.value))}
          className="w-24 border border-neutral-400 p-1 text-sm outline-none" 
        />
      </div>
      <div className="flex items-center gap-4">
        <label className="w-24 text-sm">Margin</label>
        <input 
          type="number" 
          value={options.margin}
          onChange={(e) => setOption('margin', Number(e.target.value))}
          className="w-24 border border-neutral-400 p-1 text-sm outline-none" 
        />
      </div>
    </div>
  );
}
