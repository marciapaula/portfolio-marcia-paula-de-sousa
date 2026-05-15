import { useState } from 'react';
import { downloadQrCode } from '../../core/qrGenerator';
import { FileExtension } from 'qr-code-styling';
import { useTranslation } from 'react-i18next';

export function DownloadPanel() {
  const [extension, setExtension] = useState<FileExtension>('png');
  const { t } = useTranslation();

  const handleDownload = () => {
    downloadQrCode(extension, 'qr-code');
  };

  return (
    <div className="flex gap-0">
      <button 
        onClick={handleDownload}
        className="bg-[#e0e0e0] border border-neutral-400 border-r-0 px-6 py-1.5 text-sm hover:bg-neutral-300 cursor-pointer"
      >
        {t('preview.download')}
      </button>
      <select 
        value={extension}
        onChange={(e) => setExtension(e.target.value as FileExtension)}
        className="bg-[#e0e0e0] border border-neutral-400 px-2 py-1.5 text-sm outline-none cursor-pointer"
      >
        <option value="png">PNG</option>
        <option value="jpeg">JPEG</option>
        <option value="svg">SVG</option>
        <option value="webp">WEBP</option>
      </select>
    </div>
  );
}
