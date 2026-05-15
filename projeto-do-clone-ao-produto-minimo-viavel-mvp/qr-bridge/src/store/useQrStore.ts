import { create } from 'zustand';
import { Options } from 'qr-code-styling';

const defaultLogo = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" width="140" height="40"><text x="0" y="32" font-family="sans-serif" font-weight="bold" font-size="34" fill="black">QR</text><text x="54" y="28" font-family="sans-serif" font-weight="bold" font-size="24" fill="black">Bridge</text></svg>')}`;

const defaultOptions: Options = {
  width: 300,
  height: 300,
  data: 'https://qr-code-styling.com',
  margin: 0,
  qrOptions: {
    typeNumber: 0,
    mode: 'Byte',
    errorCorrectionLevel: 'Q'
  },
  imageOptions: {
    hideBackgroundDots: true,
    imageSize: 0.4,
    margin: 5,
    crossOrigin: 'anonymous',
  },
  dotsOptions: {
    type: 'rounded',
    color: '#6a1a4c'
  },
  backgroundOptions: {
    color: '#ffffff',
  },
  image: defaultLogo,
  cornersSquareOptions: {
    type: 'extra-rounded',
    color: '#000000'
  },
  cornersDotOptions: {
    type: 'dot',
    color: '#000000'
  }
};

interface QrState {
  options: Options;
  // Atualiza todas as opções de uma vez
  setOptions: (newOptions: Options) => void;
  // Atualiza uma opção de primeiro nível (ex: width, data, margin)
  setOption: <K extends keyof Options>(key: K, value: Options[K]) => void;
  // Atualiza uma opção aninhada (ex: dotsOptions.color)
  setNestedOption: (parentKey: keyof Options, childKey: string, value: any) => void;
}

export const useQrStore = create<QrState>((set) => ({
  options: defaultOptions,
  
  setOptions: (newOptions) => set({ options: newOptions }),

  setOption: (key, value) => set((state) => ({
    options: { ...state.options, [key]: value }
  })),
  
  setNestedOption: (parentKey, childKey, value) => set((state) => ({
    options: {
      ...state.options,
      [parentKey]: {
        ...(state.options[parentKey] as object || {}),
        [childKey]: value
      }
    }
  }))
}));
