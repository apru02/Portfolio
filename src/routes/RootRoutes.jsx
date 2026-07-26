import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Seo from '../components/Seo/Seo';
import Preloader from '../components/UIElements/Preloader/Preloader';
import { routes } from './paths';

const scenes = {
  Home: lazy(() => import('../scenes/Home/Home')),
  About: lazy(() => import('../scenes/About/About')),
  Projects: lazy(() => import('../scenes/Projects/Projects')),
  Project: lazy(() =>
    import('../scenes/Projects/ProjectDetail/ProjectDetail')
  ),
  Resume: lazy(() => import('../scenes/Resume/Resume')),
  Service: lazy(() => import('../scenes/Services/ServicePage')),
};

function LazyScene({ name, ...props }) {
  const Scene = scenes[name];
  return (
    <Suspense fallback={<Preloader />}>
      <Scene {...props} />
    </Suspense>
  );
}

function RootRoutes() {
  return (
    <>
      <Seo />
      <Routes>
        <Route path={routes.Home} element={<LazyScene name="Home" />} />
        <Route path={routes.About} element={<LazyScene name="About" />} />
        <Route
          path={routes.Projects}
          element={<LazyScene name="Projects" />}
        />
        <Route path={routes.Resume} element={<LazyScene name="Resume" />} />
        <Route
          path={routes.ReactNativeDeveloper}
          element={<LazyScene name="Service" type="reactNative" />}
        />
        <Route
          path={routes.WebAppDeveloper}
          element={<LazyScene name="Service" type="webApp" />}
        />
        <Route
          path={routes.Project}
          element={<LazyScene name="Project" />}
        />
      </Routes>
    </>
  );
}

export default RootRoutes;
