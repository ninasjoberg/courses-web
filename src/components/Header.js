import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
