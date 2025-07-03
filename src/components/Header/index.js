import Link from "next/link";
import c from "./styles.module.css";

const Header = () => {
  return (
    <header className={c.header}>
      <nav>
        <ul>
          <li>
            <strong>Keystone 2 beta</strong>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/">Start</Link>
          </li>
          <li>
            <Link href="/savedcourses">Saved courses</Link>
          </li>
          <li>
            <Link href="/savedsearches">Saved searches</Link>
          </li>
          <li>
            <Link href="/myapplications">Applications</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
