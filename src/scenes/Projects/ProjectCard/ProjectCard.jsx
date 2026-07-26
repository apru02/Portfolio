import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import s from './ProjectCard.module.scss';

const ProjectCard = ({
  slug,
  image,
  title,
  tagline,
  description,
  impact,
}) => {
  return (
    <li className={s.card}>
      <div className={s.cardWrapper}>
        <Link to={`/projects/${slug}`}>
          <LazyLoadImage
            alt={`${title} case study preview`}
            effect="blur"
            src={image.src}
            width="100%"
            style={{ minHeight: '10rem' }}
            placeholderSrc={image.placeholderSrc}
          />
        </Link>

        <div className={s.cardBody}>
          {!!tagline && <p className={s.tagline}>{tagline}</p>}
          <h3 className={s.title}>{title}</h3>
          <p className={s.description}>{description}</p>
          {!!impact && <p className={s.impact}>{impact}</p>}
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
