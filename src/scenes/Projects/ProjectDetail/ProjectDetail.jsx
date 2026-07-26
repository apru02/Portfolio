import { Link, useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import BaseLayout from '../../../layouts/BaseLayout/BaseLayout';
import projects from '../../../data/projects';
import { routes } from '../../../routes/paths';
import s from './ProjectDetail.module.scss';

const linkLabels = {
  site: 'Visit the website',
  project: 'View project',
  repo: 'View source code',
  testflight: 'Open TestFlight',
  playstore: 'View on Google Play',
  appstore: 'View on the App Store',
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <BaseLayout>
        <div className={s.notFound}>
          <h1>Project not found</h1>
          <p>The requested case study does not exist.</p>
          <Link to={routes.Projects}>View all projects</Link>
        </div>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout>
      <div className={s.page}>
        <article>
          <header className={s.hero}>
            <p className={s.eyebrow}>{project.tagline}</p>
            <h1>{project.title}</h1>
            <p className={s.role}>{project.role}</p>
            <p className={s.summary}>{project.summary}</p>
          </header>

          <figure className={s.visual}>
            <LazyLoadImage
              alt={`${project.title} product case study illustration`}
              src={project.image.src}
              effect="blur"
              width="100%"
              placeholderSrc={project.image.placeholderSrc}
            />
          </figure>

          <section className={s.impact} aria-labelledby="impact-title">
            <p className={s.eyebrow}>Outcome</p>
            <h2 id="impact-title">{project.impact}</h2>
          </section>

          <section className={s.details} aria-labelledby="work-title">
            <div>
              <p className={s.eyebrow}>Selected implementation work</p>
              <h2 id="work-title">
                What I built and improved
              </h2>
            </div>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>

          <section className={s.stack} aria-labelledby="stack-title">
            <p className={s.eyebrow}>Technology</p>
            <h2 id="stack-title">Tools and capabilities</h2>
            <ul>
              {project.technologies.map((technology) => (
                <li key={technology}>
                  {technology.replace(/^#/, '')}
                </li>
              ))}
            </ul>
          </section>

          {Object.keys(project.links).length > 0 && (
            <section className={s.links} aria-labelledby="links-title">
              <p className={s.eyebrow}>Explore</p>
              <h2 id="links-title">Project links</h2>
              <div>
                {Object.entries(project.links).map(([type, url]) => (
                  <a key={type} href={url} target="_blank" rel="noreferrer">
                    {linkLabels[type] || 'Open link'}
                  </a>
                ))}
              </div>
            </section>
          )}

          <footer className={s.footer}>
            <Link to={routes.Projects}>← Back to all projects</Link>
            <a href="mailto:duttaapratim11@gmail.com">
              Discuss a similar product
            </a>
          </footer>
        </article>
      </div>
    </BaseLayout>
  );
};

export default ProjectDetail;
