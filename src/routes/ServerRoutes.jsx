import { Route, Routes } from 'react-router-dom';
import Seo from '../components/Seo/Seo';
import BaseLayout from '../layouts/BaseLayout/BaseLayout';
import About from '../scenes/About/About';
import Home from '../scenes/Home/Home';
import Projects from '../scenes/Projects/Projects';
import ProjectDetail from '../scenes/Projects/ProjectDetail/ProjectDetail';
import ServicePage from '../scenes/Services/ServicePage';
import { routes } from './paths';

const ResumeFallback = () => (
  <BaseLayout>
    <section
      style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '5rem 2rem',
      }}
    >
      <h1 style={{ fontSize: '3rem' }}>Apratim Dutta Resume</h1>
      <p style={{ margin: '1.5rem 0', lineHeight: 1.7 }}>
        React Native and full-stack developer based in Kolkata,
        experienced in shipping Android, iOS, React, API-backed, and
        AI-assisted products.
      </p>
      <a href="/resume/Apratim-Dutta-Resume-2026.pdf">
        Download the latest resume
      </a>
    </section>
  </BaseLayout>
);

const ServerRoutes = () => (
  <>
    <Seo />
    <Routes>
      <Route path={routes.Home} element={<Home />} />
      <Route path={routes.About} element={<About />} />
      <Route path={routes.Projects} element={<Projects />} />
      <Route path={routes.Resume} element={<ResumeFallback />} />
      <Route
        path={routes.ReactNativeDeveloper}
        element={<ServicePage type="reactNative" />}
      />
      <Route
        path={routes.WebAppDeveloper}
        element={<ServicePage type="webApp" />}
      />
      <Route path={routes.Project} element={<ProjectDetail />} />
    </Routes>
  </>
);

export default ServerRoutes;
