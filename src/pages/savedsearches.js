import Link from "next/link";
import Header from "../components/Header";

const SavedSearches = ({ searches }) => {
  return (
    <div>
      <Header />
      My saved courses
      <ul>
        {searches.map((search, key) => {
          const { location, category, deliveryMethods } = search;
          const searchParams = new URLSearchParams(search);
          const queryString = searchParams.toString();
          return (
            <li key={key}>
              <p>
                {location} {category} {deliveryMethods}
              </p>
              <Link href={`/?${queryString}`}>Saved courses</Link>
            </li>
          );
        })}
      </ul>
    </div>
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
