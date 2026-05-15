import QRCodeStyling, { Options, FileExtension } from 'qr-code-styling';

/**
 * CORE DOMAIN: Lógica de geração do QR Code.
 * Isolamos a instância da biblioteca aqui para garantir Baixo Acoplamento.
 * O Frontend (React) não precisa saber COMO o QR Code é gerado, apenas chama estas funções.
 */

// Instância Singleton: Evita recriar o objeto pesado na memória a cada renderização do React.
export const qrCodeInstance = new QRCodeStyling();

// Função para atualizar as opções do QR Code
export const updateQrCode = (options: Options) => {
  qrCodeInstance.update(options);
};

// Função para injetar o QR Code em um elemento HTML (div)
export const appendQrCodeToElement = (element: HTMLElement) => {
  element.innerHTML = ''; // Limpa o container antes de injetar
  qrCodeInstance.append(element);
};

// Função para realizar o download
export const downloadQrCode = (extension: FileExtension, name: string = 'qr') => {
  qrCodeInstance.download({ extension, name });
};
