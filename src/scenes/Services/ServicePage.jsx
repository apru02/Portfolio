import { Link } from 'react-router-dom';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import projects from '../../data/projects';
import { routes } from '../../routes/paths';
import { servicePages } from './servicePages';
import s from './ServicePage.module.scss';

const ServicePage = ({ type }) => {
  const page = servicePages[type];
  const relatedProjects = page.relatedProjectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);

  return (
    <BaseLayout>
      <div className={s.page}>
        <article>
          <header className={s.hero}>
            <p className={s.eyebrow}>{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p className={s.introduction}>{page.introduction}</p>
            <div className={s.actions}>
              <a href="mailto:duttaapratim11@gmail.com">
                Discuss a product
              </a>
              <Link to={routes.Projects}>See relevant work</Link>
            </div>
          </header>

          <section className={s.section} aria-labelledby="capabilities-title">
            <div className={s.sectionHeading}>
              <p className={s.eyebrow}>Capabilities</p>
              <h2 id="capabilities-title">
                Product engineering beyond the interface
              </h2>
            </div>
            <div className={s.cardGrid}>
              {page.capabilities.map((capability) => (
                <article className={s.card} key={capability.title}>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={s.section} aria-labelledby="proof-title">
            <div className={s.sectionHeading}>
              <p className={s.eyebrow}>Production proof</p>
              <h2 id="proof-title">Experience grounded in shipped work</h2>
            </div>
            <ul className={s.proofList}>
              {page.proof.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className={s.section} aria-labelledby="process-title">
            <div className={s.sectionHeading}>
              <p className={s.eyebrow}>How I work</p>
              <h2 id="process-title">A practical route from idea to release</h2>
            </div>
            <ol className={s.processGrid}>
              {page.process.map((step, index) => (
                <li className={s.card} key={step.title}>
                  <span className={s.stepNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className={s.section} aria-labelledby="work-title">
            <div className={s.sectionHeading}>
              <p className={s.eyebrow}>Selected work</p>
              <h2 id="work-title">Case studies with implementation detail</h2>
            </div>
            <div className={s.projectGrid}>
              {relatedProjects.map((project) => (
                <article className={s.projectCard} key={project.slug}>
                  <p>{project.tagline}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link to={`/projects/${project.slug}`}>
                    Read the case study
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section className={s.section} aria-labelledby="faq-title">
            <div className={s.sectionHeading}>
              <p className={s.eyebrow}>Common questions</p>
              <h2 id="faq-title">Working together</h2>
            </div>
            <div className={s.faqList}>
              {page.faqs.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className={s.cta} aria-labelledby="contact-title">
            <p className={s.eyebrow}>Start a conversation</p>
            <h2 id="contact-title">
              Have a mobile or web product that needs dependable execution?
            </h2>
            <a href="mailto:duttaapratim11@gmail.com">
              duttaapratim11@gmail.com
            </a>
          </section>
        </article>
      </div>
    </BaseLayout>
  );
};

export default ServicePage;
