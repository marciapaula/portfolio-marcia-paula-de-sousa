/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import { Accordion } from './components/ui/Accordion';
import { MainOptions } from './components/qrcode/MainOptions';
import { DotsOptions } from './components/qrcode/DotsOptions';
import { CornersSquareOptions } from './components/qrcode/CornersSquareOptions';
import { CornersDotOptions } from './components/qrcode/CornersDotOptions';
import { BackgroundOptions } from './components/qrcode/BackgroundOptions';
import { ImageOptions } from './components/qrcode/ImageOptions';
import { QrOptions } from './components/qrcode/QrOptions';
import { QrPreview } from './components/qrcode/QrPreview';
import { DownloadPanel } from './components/qrcode/DownloadPanel';
import { HistoryPanel } from './components/qrcode/HistoryPanel';
import { useQrStore } from './store/useQrStore';
import { useAuthStore } from './store/useAuthStore';
import { useThemeStore } from './store/useThemeStore';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { options } = useQrStore();
  const { initAuthListener } = useAuthStore();
  const { backgroundImage } = useThemeStore();
  const { t } = useTranslation();

  useEffect(() => {
    const unsubscribe = initAuthListener();
    return () => unsubscribe();
  }, [initAuthListener]);

  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(options, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "qr_code_options.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-8 items-start max-w-5xl mx-auto px-6 w-full">
        {/* Coluna da Esquerda: Accordions */}
        <div className={`w-full md:w-[60%] flex flex-col gap-4 p-6 rounded-2xl transition-all duration-500 ${backgroundImage ? 'bg-white/30 dark:bg-black/40 backdrop-blur-xl shadow-2xl border border-white/40 dark:border-white/10' : 'bg-neutral-100 dark:bg-neutral-900 shadow-inner border border-neutral-200 dark:border-neutral-800'}`}>
          
          <Accordion title={t('app.main_options')} defaultOpen={true}>
            <MainOptions />
          </Accordion>

          <Accordion title={t('app.dots_options')}>
            <DotsOptions />
          </Accordion>

          <Accordion title={t('app.corners_square')}>
            <CornersSquareOptions />
          </Accordion>

          <Accordion title={t('app.corners_dot')}>
            <CornersDotOptions />
          </Accordion>

          <Accordion title={t('app.bg_options')}>
            <BackgroundOptions />
          </Accordion>

          <Accordion title={t('app.image_options')}>
            <ImageOptions />
          </Accordion>

          <Accordion title={t('app.qr_options')}>
            <QrOptions />
          </Accordion>

          <Accordion title="Saved Configurations">
            <HistoryPanel />
          </Accordion>

          <div className="pt-4 mt-2 border-t border-black/10 dark:border-white/10">
            <button 
              onClick={handleExportJson}
              className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-white/60 dark:bg-black/60 hover:bg-white/90 dark:hover:bg-black/90 text-neutral-800 dark:text-neutral-200 font-medium rounded-xl shadow-sm hover:shadow-md border border-white/50 dark:border-white/10 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
            >
              {t('app.export_json')}
            </button>
          </div>
        </div>

        {/* Coluna da Direita: QR Code Preview */}
        <div className="w-full md:w-[40%] flex flex-col items-center pt-2">
          <div className={`w-full flex flex-col items-center p-8 rounded-2xl transition-all duration-500 ${backgroundImage ? 'bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-2xl border border-white/40 dark:border-white/10' : 'bg-white dark:bg-neutral-900 shadow-lg border border-neutral-200 dark:border-neutral-800'}`}>
            <QrPreview />
            <DownloadPanel />
          </div>
        </div>
      </div>
    </Layout>
  );
}
