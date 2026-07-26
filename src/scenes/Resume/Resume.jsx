import { lazy, Suspense } from 'react';
import DownloadIcon from '../../assets/download.svg?react';
import FilesIcon from '../../assets/resume-files.svg?react';
import Button from '../../components/UIElements/Button/Button';
import LinerProgress from '../../components/UIElements/LinerProgress/LinerProgress';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import s from './Resume.module.scss';

const ResumeViewer = lazy(() => import('./ResumeViewer'));
const resumeLink = '/resume/Apratim-Dutta-Resume-2026.pdf';

const Resume = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>
            Apratim Dutta <br /> Resume
          </h1>

          <div className={s.filesImg}>
            <FilesIcon />
          </div>
        </div>

        <p>
          React Native and full-stack developer based in Kolkata,
          experienced in shipping Android, iOS, React, API-backed, and
          AI-assisted products.
        </p>

        <Button
          style={{ margin: '2rem auto', width: '15rem' }}
          className="primary"
          href={resumeLink}
          target="_blank"
        >
          <DownloadIcon fill="#fff" />
          <span className={s.downloadText}> download latest resume</span>
          <span className={s.filename}>.pdf</span>
        </Button>

        {typeof window !== 'undefined' && (
          <Suspense fallback={<LinerProgress />}>
            <ResumeViewer file={resumeLink} />
          </Suspense>
        )}
      </div>
    </BaseLayout>
  );
};

export default Resume;
