import { Link, useLocation } from 'react-router-dom';
import projects from '../../data/projects';
import MainSection from './MainSection/MainSection';
import IntroSection from './IntroSection/IntroSection';
import HomeLayout from '../../layouts/HomeLayout/HomeLayout';
import s from './Home.module.scss';

const recentWins = [
  {
    title: '35% faster workflows',
    description:
      'Reduced React module load times by introducing React Query and cleaner data synchronization patterns.',
  },
  {
    title: 'Production mobile features',
    description:
      'Delivered push notifications, deep linking, and background event handling for field teams using React Native.',
  },
  {
    title: 'AI-backed product work',
    description:
      'Built ingredient recognition and recipe extraction flows with Python, FastAPI, PostgreSQL, and Supabase.',
  },
  {
    title: 'Payments and real-time collaboration',
    description:
      'Integrated Razorpay checkout and Firebase-powered group messaging for consumer-facing mobile products.',
  },
];

const Home = () => {
  const location = useLocation();

  return (
    <HomeLayout>
      <MainSection />
      <IntroSection />
      {/* <section className={s.section}>
        <div className={s.sectionHeader}>
          <p className={s.eyebrow}>Selected wins</p>
          <h2 className={s.title}>
            Proof that the work is already happening in production
          </h2>
          <p className={s.subtitle}>
            Recent experience across operations software, consumer
            mobile, AI-assisted workflows, and data-heavy products.
          </p>
        </div>

        <div className={s.winsGrid}>
          {recentWins.map((win) => (
            <article key={win.title} className={s.infoCard}>
              <h3>{win.title}</h3>
              <p>{win.description}</p>
            </article>
          ))}
        </div>
      </section> */}

      <section className={s.section}>
        <div className={s.sectionHeader}>
          <p className={s.eyebrow}>Featured work</p>
          <h2 className={s.title}>
            A few case studies worth opening
          </h2>
          <p className={s.subtitle}>
            Mobile apps, AI product experiments, and
            performance-minded engineering work with clear business
            value.
          </p>
        </div>

        <div className={s.projectsGrid}>
          {projects.slice(0, 3).map((project) => (
            <article key={project.id} className={s.projectCard}>
              <p className={s.projectTagline}>{project.tagline}</p>
              <h3 className={s.projectTitle}>{project.title}</h3>
              <p className={s.projectDescription}>
                {project.description}
              </p>
              <p className={s.projectImpact}>{project.impact}</p>

              <div className={s.projectTags}>
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <Link
                to={`/project/${project.id}`}
                state={{ background: location }}
                className={s.projectLink}
              >
                Open case study
              </Link>
            </article>
          ))}
        </div>

        <div className={s.sectionAction}>
          <Link to="/projects" className={s.actionLink}>
            View all projects
          </Link>
        </div>
      </section>
    </HomeLayout>
  );
};

export default Home;
