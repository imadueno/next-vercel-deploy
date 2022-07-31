import style from "./NavBar.module.css";
import { ActiveLink } from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const NavBar = () => {
  return (
    <nav className={style["nav-container"]}>
      {menuItems.map(({ href, text }) => (
        <ActiveLink key={href} href={href} text={text} />
      ))}
    </nav>
  );
};
