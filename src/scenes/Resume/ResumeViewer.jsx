import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import LinerProgress from '../../components/UIElements/LinerProgress/LinerProgress';
import s from './Resume.module.scss';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumeViewer = ({ file }) => {
  const pdfWrapper = useRef(null);
  const [pdfPageWidth, setPdfPageWidth] = useState(null);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    const updatePdfPageWidth = () => {
      setPdfPageWidth(
        pdfWrapper.current?.getBoundingClientRect().width || null,
      );
    };

    updatePdfPageWidth();
    window.addEventListener('resize', updatePdfPageWidth);

    return () => {
      window.removeEventListener('resize', updatePdfPageWidth);
    };
  }, []);

  const removeTextLayerOffset = () => {
    const textLayers = document.querySelectorAll(
      '.react-pdf__Page__textContent',
    );
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = '0';
      style.left = '0';
      style.transform = '';
    });
  };

  return (
    <div className={s.pdfWrapper} ref={pdfWrapper}>
      <Document
        loading={<LinerProgress />}
        file={file}
        onLoadSuccess={({ numPages: loadedPages }) =>
          setNumPages(loadedPages)
        }
      >
        {Array.from(new Array(Math.max(numPages, 1)), (_, index) => (
          <Page
            className={s.pdfPage}
            key={`resume-page-${index + 1}`}
            onLoadSuccess={removeTextLayerOffset}
            loading={<LinerProgress />}
            width={pdfPageWidth}
            pageNumber={index + 1}
          />
        ))}
      </Document>
    </div>
  );
};

export default ResumeViewer;
