import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

const NavLinks = [
  { url: "/", text: "Home", id: "1" },
  { url: "/destination", text: "Destination", id: "2" },
  { url: "/crew", text: "Crew", id: "3" },
  { url: "/technology", text: "Technology", id: "4" },
];

const Navigation = function (props) {
  const isActiveIndex = NavLinks.findIndex(
    (link) =>
      link.url === props.path || props.path.includes(link.text.toLowerCase())
  );

  return (
    <div className={styles.navigation}>
      <ul className={styles.navigation__list}>
        {NavLinks.map((link, index) => (
          <li key={link.id} className={styles.navigation__item}>
            <Link
              role='link'
              name={link.text}
              to={link.url}
              className={`${styles.navigation__link} ${
                index === isActiveIndex
                  ? styles["navigation__link--active"]
                  : ""
              }`}
            >
              <span className={styles.navigation__index}>{`0${index}`}</span>
              <span className={styles.navigation__text}>{link.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
