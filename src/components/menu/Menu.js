import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";

const NavLinks = [
  { url: "/", text: "Home", id: "1" },
  { url: "/destination", text: "Destination", id: "2" },
  { url: "/crew", text: "Crew", id: "3" },
  { url: "/technology", text: "Technology", id: "4" },
];

const Menu = function (props) {
  const isActiveIndex = NavLinks.findIndex((link) => link.url === props.path);

  return (
    <div className={styles.menu}>
      <ul className={styles.menu__list}>
        {NavLinks.map((link, i) => (
          <li key={i} className={styles.menu__list}>
            <Link
              to={link.url}
              className={`${styles.menu__link} ${
                isActiveIndex === i ? styles["menu__link--active"] : ""
              }`}
            >
              <span className={styles["menu__link--index"]}>
                0{`${link.id}`}
              </span>
              <span className={styles["menu__link--text"]}>{link.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
