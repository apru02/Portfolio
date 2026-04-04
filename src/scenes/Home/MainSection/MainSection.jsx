import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import handIcon from '../../../assets/hand.png';
import homeMainIcon from '../../../assets/home-main.svg';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import { routes } from '../../../routes/RootRoutes';
import s from './MainSection.module.scss';

const proofPoints = [
  {
    value: 'Shipping',
    label: 'Multiple apps shipped to Play Store and Apple App Store',
  },
  {
    value: 'Concept -> Code',
    label: 'End to end product development',
  },
  {
    value: 'Mobile + Web',
    label: 'shipping React Native, React, and API-backed products',
  },
];

const MainSection = () => {
  return (
    <section className={s.content}>
      <div className={s.header}>
        <div className={s.greetingContainer}>
          <p className={s.title}>
            Available for serious product work
          </p>
          <img src={handIcon} className={s.handIcon} alt="" />
        </div>

        <h1 className={s.mainTitle}>
          I build
          <strong className={s.mainName}>
            {' '}
            polished mobile and web products
          </strong>{' '}
          that ship fast and scale cleanly.
        </h1>

        <p className={s.lead}>
          I&apos;m Apratim Dutta, a software engineer building
          high-quality experiences across React Native, React,
          Node.js, and AI-assisted product flows for startups and
          fast-moving teams.
        </p>

        <div className={s.typewriter}>
          <Typewriter
            strings={[
              'React Native Developer',
              'Full-Stack Product Builder',
              'Shipping real-world user experiences',
            ]}
            wrapperClassName={s.typewriterInner}
            cursorClassName={s.typewriterCursor}
          />
        </div>

        <div className={s.ctaRow}>
          <Link to={routes.Projects} className={s.ctaLink}>
            View selected work
          </Link>
          <Link to={routes.Resume} className={s.ctaLinkSecondary}>
            See latest resume
          </Link>
        </div>

        <div className={s.trustGrid}>
          {proofPoints.map((point) => (
            <article key={point.value} className={s.trustCard}>
              <span className={s.trustValue}>{point.value}</span>
              <p className={s.trustLabel}>{point.label}</p>
            </article>
          ))}
        </div>
      </div>

      <div className={s.spacer} />

      <LazyLoadImage
        alt="Illustration representing product engineering and app development"
        effect="blur"
        src={homeMainIcon}
        wrapperClassName={s.homeMainIcon}
        width="396"
        height="400"
      />
    </section>
  );
};

export default MainSection;
