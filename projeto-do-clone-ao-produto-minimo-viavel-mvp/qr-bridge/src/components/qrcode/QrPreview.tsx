import { useEffect, useRef } from 'react';
import { useQrStore } from '../../store/useQrStore';
import { updateQrCode, appendQrCodeToElement } from '../../core/qrGenerator';

export function QrPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const options = useQrStore((state) => state.options);

  useEffect(() => {
    if (ref.current) {
      // Atualiza a instância do Core com as novas opções do Zustand
      updateQrCode(options);
      // Injeta o SVG/Canvas gerado na div
      appendQrCodeToElement(ref.current);
    }
  }, [options]);

  return (
    <div className="w-[300px] h-[300px] bg-white flex items-center justify-center mb-6">
      <div ref={ref} />
    </div>
  );
}
