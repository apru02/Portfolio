import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { CgFileDocument } from '@react-icons/all-files/cg/CgFileDocument';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Tilt from 'react-parallax-tilt';
import avatar from '../../../assets/avatar.svg';
import s from './IntroSection.module.scss';

const proofPoints = [
  {
    value: 'Production ready',
    label:
      'Building production React Native and React features at SiteMaster.',
  },
  {
    value: 'Real-time UX',
    label:
      'Notifications, messaging, deep linking, and background event handling.',
  },
  {
    value: 'Payments',
    label:
      'Experience with Razorpay, Stripe, RevenueCat, and subscription flows.',
  },
];

const capabilities = [
  {
    title: 'Mobile product delivery',
    description:
      'Cross-platform React Native and Expo apps with thoughtful UX, device integrations, and smooth state-heavy flows.',
  },
  {
    title: 'Frontend performance',
    description:
      'React applications that stay fast under real-world data loads, with clean architecture and maintainable components.',
  },
  {
    title: 'Backend integration',
    description:
      'API design, payment integrations, real-time services, and AI-assisted workflows connected into usable products.',
  },
];

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          {/* <p className={s.eyebrow}>Why teams hire me</p> */}
          <h2 className={s.title}>
            I turn ambitious ideas into dependable
            <span className={s.purple}> product experiences</span>.
          </h2>

          <div className={s.description}>
            <p>
              I&apos;m a <b>software engineer</b> focused on mobile
              and web product development, currently working at
              <b> SiteMaster</b> across React Native and React
              features for real-time project updates, approvals, and
              operational workflows.
            </p>

            <p>
              I do my best work when a team needs someone who can move
              between{' '}
              <b>
                frontend execution, backend integration, and product
                thinking
              </b>{' '}
              without losing attention to performance, polish, or
              delivery speed.
            </p>
          </div>

          <div className={s.proofGrid}>
            {proofPoints.map((point) => (
              <article key={point.value} className={s.proofCard}>
                <span className={s.proofValue}>{point.value}</span>
                <p className={s.proofLabel}>{point.label}</p>
              </article>
            ))}
          </div>
        </div>

        <Tilt trackOnWindow={true} className={s.avatarCard}>
          <LazyLoadImage
            alt="Illustrated portrait of Apratim Dutta"
            effect="blur"
            src={avatar}
          />
        </Tilt>
      </div>

      <div className={s.capabilities}>
        {capabilities.map((item) => (
          <article key={item.title} className={s.capabilityCard}>
            <h2 className={s.capabilityTitle}>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </div>

      <div className={s.introSocial}>
        <h2>Professional Links</h2>
        <p>
          Open-source work, latest resume, and a direct line to
          connect.
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/apru02"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/apru02/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="/resume/Apratim-Dutta-Resume-2026.pdf"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="resume"
            >
              <CgFileDocument />
            </a>
          </li>
        </ul>
        <a
          className={s.contactLink}
          href="mailto:duttaapratim11@gmail.com"
        >
          duttaapratim11@gmail.com
        </a>
      </div>
    </section>
  );
};

export default IntroSection;
