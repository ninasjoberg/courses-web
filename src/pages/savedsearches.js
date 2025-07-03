import Link from "next/link";
import Header from "../components/Header";
import c from "../styles.module.css";

const SavedSearches = ({ searches }) => {
  return (
    <>
      <Header />
      <main className="container">
        My saved courses
        <ul>
          {searches.map((search, key) => {
            const { location, category, deliveryMethods } = search;
            const searchParams = new URLSearchParams(search);
            const queryString = searchParams.toString();
            return (
              <li className={c.listItem} key={key}>
                <article>
                  <p>
                    {location} {category} {deliveryMethods}
                  </p>
                  <Link href={`/?${queryString}`}>Saved courses</Link>
                </article>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default SavedSearches;

export async function getStaticProps() {
  const res = await fetch("http://localhost:8000/courses/savedsearches");
  const savedSearches = await res.json();
  const searches = savedSearches.map(({ query }) => {
    return JSON.parse(query);
  });
  return { props: { searches } };
}
