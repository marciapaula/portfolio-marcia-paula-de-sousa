import { create } from 'zustand';
import { Options } from 'qr-code-styling';

const defaultLogo = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTAgNDAiIHdpZHRoPSIxMTAiIGhlaWdodD0iNDAiPjx0ZXh0IHg9IjAiIHk9IjMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iMzQiIGZpbGw9ImJsYWNrIj5RUjwvdGV4dD48dGV4dCB4PSI1MiIgeT0iMTQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxNCIgZmlsbD0iYmxhY2siPkNPREU8L3RleHQ+PHRleHQgeD0iNTIiIHk9IjMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iYmxhY2siPlNUWUxJTkc8L3RleHQ+PC9zdmc+";

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
  // Atualiza uma opção de primeiro nível (ex: width, data, margin)
  setOption: <K extends keyof Options>(key: K, value: Options[K]) => void;
  // Atualiza uma opção aninhada (ex: dotsOptions.color)
  setNestedOption: (parentKey: keyof Options, childKey: string, value: any) => void;
}

export const useQrStore = create<QrState>((set) => ({
  options: defaultOptions,
  
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
