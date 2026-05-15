import { useQrStore } from '../../store/useQrStore';
import { useTranslation } from 'react-i18next';

export function QrOptions() {
  const { options, setNestedOption } = useQrStore();
  const { t } = useTranslation();
  
  return (
    <div className="bg-[#f4f4f4] p-4 flex flex-col gap-4 border border-neutral-300 border-t-0">
      <div className="flex items-center gap-4">
        <label className="w-32 text-sm">{t('options.type_number')}</label>
        <input
          type="number"
          min="0"
          max="40"
          value={options.qrOptions?.typeNumber || 0}
          onChange={(e) => setNestedOption('qrOptions', 'typeNumber', Number(e.target.value))}
          className="w-24 border border-neutral-400 p-1 text-sm outline-none"
        />
      </div>
      <div className="flex items-center gap-4">
        <label className="w-32 text-sm">{t('options.mode')}</label>
        <select
          value={options.qrOptions?.mode || 'Byte'}
          onChange={(e) => setNestedOption('qrOptions', 'mode', e.target.value)}
          className="flex-grow border border-neutral-400 p-1 text-sm outline-none bg-white"
        >
          <option value="Numeric">Numeric</option>
          <option value="Alphanumeric">Alphanumeric</option>
          <option value="Byte">Byte</option>
          <option value="Kanji">Kanji</option>
        </select>
      </div>
      <div className="flex items-center gap-4">
        <label className="w-32 text-sm">{t('options.error_correction')}</label>
        <select
          value={options.qrOptions?.errorCorrectionLevel || 'Q'}
          onChange={(e) => setNestedOption('qrOptions', 'errorCorrectionLevel', e.target.value)}
          className="flex-grow border border-neutral-400 p-1 text-sm outline-none bg-white"
        >
          <option value="L">L</option>
          <option value="M">M</option>
          <option value="Q">Q</option>
          <option value="H">H</option>
        </select>
      </div>
    </div>
  );
}
