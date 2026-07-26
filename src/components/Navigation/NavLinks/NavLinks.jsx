import { AiOutlineFundProjectionScreen } from '@react-icons/all-files/ai/AiOutlineFundProjectionScreen';
import { AiOutlineHome } from '@react-icons/all-files/ai/AiOutlineHome';
import { AiOutlineUser } from '@react-icons/all-files/ai/AiOutlineUser';
import { CgFileDocument } from '@react-icons/all-files/cg/CgFileDocument';
import { NavLink } from 'react-router-dom';
import { routes as r } from '../../../routes/paths';
import s from './NavLinks.module.scss';

const navigationItems = ['Home', 'About', 'Projects', 'Resume'];

const icons = {
  Home: <AiOutlineHome />,
  About: <AiOutlineUser />,
  Projects: <AiOutlineFundProjectionScreen />,
  Resume: <CgFileDocument />,
};

const Link = (props) => {
  return (
    <NavLink to={props.to} end={props.end}>
      {props.icon || null}
      {props.name}
    </NavLink>
  );
};

const NavLinks = () => {
  return (
    <ul className={s.navBar}>
      {navigationItems.map((name, idx) => {
        return (
          <li key={idx}>
            <Link
              to={r[name]}
              name={name}
              icon={icons[name]}
              end={idx === 0}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
