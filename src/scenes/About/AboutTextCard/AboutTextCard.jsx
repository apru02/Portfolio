import s from './AboutTextCard.module.scss';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Apratim Dutta, </span>
        <br />a software engineer currently based in{' '}
        <span className={s.purple}>Kolkata, India.</span>
        <br />
        <br />
        I graduated with a Bachelor&apos;s degree in Information
        Technology from IIEST Shibpur and currently work at
        SiteMaster.
        <br />
        <br />
        My core focus is building high-quality mobile and web products
        with React Native, React, and backend integrations that support
        real users and real workflows.
        <br />
        <br />
        My hobbies beyond programming:
      </p>

      <ul style={{ marginLeft: 14 }}>
        <li className={s.aboutActivity}>
          - Travelling and adventures
        </li>
        <li className={s.aboutActivity}>
          - Cricket
        </li>
        <li className={s.aboutActivity}>
          - Exploring product ideas
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
