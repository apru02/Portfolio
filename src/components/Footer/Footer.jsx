import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { CgFileDocument } from '@react-icons/all-files/cg/CgFileDocument';
import s from './Footer.module.scss';

const Footer = () => {
  // let date = new Date();
  // let year = date.getFullYear();

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <p>Built and maintained by Apratim Dutta</p>
          <nav className={s.serviceLinks} aria-label="Development services">
            <a href="/react-native-developer-kolkata">
              React Native development
            </a>
            <a href="/web-app-developer-kolkata">
              Web app development
            </a>
          </nav>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/apru02"
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/apru02/"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="/resume/Apratim-Dutta-Resume-2026.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="resume"
              >
                <CgFileDocument />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
