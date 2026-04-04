import { useEffect, useRef, useState } from 'react';
import DownloadIcon from '../../assets/download.svg?react';
import FilesIcon from '../../assets/resume-files.svg?react';
import Button from '../../components/UIElements/Button/Button';
import LinerProgress from '../../components/UIElements/LinerProgress/LinerProgress';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import s from './Resume.module.scss';
//react-pdf
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink = 'https://raw.githubusercontent.com/apru02/apru02/main/APRATIM_DUTTA_CV_2026.pdf';

const Resume = () => {
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

  const handleDocumentLoadSuccess = ({ numPages: loadedPages }) => {
    setNumPages(loadedPages);
  };

  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>
            My <br /> Resume
          </h1>

          <div className={s.filesImg}>
            <FilesIcon />
          </div>
        </div>

        <Button
          style={{ margin: 'auto', width: '15rem' }}
          className="primary"
          href={resumeLink}
          target="_blank"
        >
          <DownloadIcon fill="#fff" />
          <span className={s.downloadText}> download latest resume</span>
          <span className={s.filename}>.pdf</span>
        </Button>

        <div className={s.pdfWrapper} ref={pdfWrapper}>
          <Document
            loading={<LinerProgress />}
            file={resumeLink}
            onLoadSuccess={handleDocumentLoadSuccess}
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
      </div>
    </BaseLayout>
  );
};

export default Resume;
