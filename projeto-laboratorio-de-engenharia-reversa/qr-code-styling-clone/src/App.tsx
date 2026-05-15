/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
import { useQrStore } from './store/useQrStore';

export default function App() {
  const { options } = useQrStore();

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
        <div className="w-full md:w-[60%] flex flex-col gap-[1px] bg-neutral-300">
          
          <Accordion title="Main Options" defaultOpen={true}>
            <MainOptions />
          </Accordion>

          <Accordion title="Dots Options">
            <DotsOptions />
          </Accordion>

          <Accordion title="Corners Square Options">
            <CornersSquareOptions />
          </Accordion>

          <Accordion title="Corners Dot Options">
            <CornersDotOptions />
          </Accordion>

          <Accordion title="Background Options">
            <BackgroundOptions />
          </Accordion>

          <Accordion title="Image Options">
            <ImageOptions />
          </Accordion>

          <Accordion title="QR Options">
            <QrOptions />
          </Accordion>

          <button 
            onClick={handleExportJson}
            className="bg-[#e0e0e0] border border-neutral-400 px-4 py-2 text-sm hover:bg-neutral-300 self-start mt-4 cursor-pointer"
          >
            Export Options as JSON
          </button>
        </div>

        {/* Coluna da Direita: QR Code Preview */}
        <div className="w-full md:w-[40%] flex flex-col items-center pt-4">
          <QrPreview />
          <DownloadPanel />
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 mt-12 mb-8 text-sm text-neutral-800 w-full">
        If you have any questions or issues please contact me via email or GitHub Issues.
      </div>
    </Layout>
  );
}
