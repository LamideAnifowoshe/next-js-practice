import Link from "next/link";
import navStyles from "../style/nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>{" "}
    </nav>
  );
};

export default Nav;
