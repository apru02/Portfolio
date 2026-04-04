import s from './ModalProjectCard.module.scss';
import projects from '../../../data/projects';
import { BiLinkExternal } from '@react-icons/all-files/bi/BiLinkExternal';
import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/UIElements/Button/Button';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useModal } from '../../../hooks/modalHook';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ModalProjectCard = () => {
  const { id } = useParams();
  const project = projects.find((p) => id === p.id);
  const { isVisible, toggleModal } = useModal();

  useEffect(() => {
    toggleModal();
  }, []);

  if (!project) {
    return null;
  }

  const {
    image,
    title,
    tagline,
    role,
    summary,
    impact,
    highlights,
    links,
    technologies,
  } = project;

  return (
    <Modal show={isVisible} onClose={toggleModal}>
      <div className={s.cardWrapper}>
        <LazyLoadImage
          alt="project-img"
          src={image.src}
          effect="blur"
          width="100%"
          wrapperClassName={s.image}
          placeholderSrc={image.placeholderSrc}
        />

        <div className={s.cardBody}>
          <h3 className={s.title}>{title}</h3>
          {!!role && <p className={s.role}>{role}</p>}
          {!!tagline && <p className={s.tagline}>{tagline}</p>}
          {!!summary && <p className={s.summary}>{summary}</p>}
          {!!impact && <p className={s.impact}>{impact}</p>}

          {!!highlights?.length && (
            <ul className={s.highlights}>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          <div className={s.technologies}>
            {technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </div>

        {(!!links.site || !!links.repo || !!links.testflight || !!links.project || !!links.playstore || !!links.appstore) && (
          <div className={s.cardFooter}>
            {links.site && (
              <Button
                style={{ width: '12rem' }}
                className="primary"
                href={links.site}
                target="_blank"
              >
                <BiLinkExternal /> &nbsp; View site
              </Button>
            )}

            {links.testflight && (
              <Button
                style={{ width: '12rem' }}
                className="primary"
                href={links.testflight}
                target="_blank"
              >
                <BiLinkExternal /> &nbsp; View testflight
              </Button>
            )}

            {links.playstore && (
              <Button
                style={{ width: '12rem' }}
                className="primary"
                href={links.playstore}
                target="_blank"
              >
                <BiLinkExternal /> &nbsp; View playstore
              </Button>
            )}

            {links.appstore && (
              <Button
                style={{ width: '12rem' }}
                className="primary"
                href={links.appstore}
                target="_blank"
              >
                <BiLinkExternal /> &nbsp; View appstore
              </Button>
            )}

            {links.project && (
              <Button
                style={{ width: '12rem' }}
                className="primary"
                href={links.project}
                target="_blank"
              >
                <BiLinkExternal /> &nbsp; View project
              </Button>
            )}

            {links.repo && (
              <Button
                style={{ width: '12rem' }}
                className="primary"
                href={links.repo}
                target="_blank"
              >
                <BiLinkExternal /> &nbsp; View source
              </Button>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ModalProjectCard;
