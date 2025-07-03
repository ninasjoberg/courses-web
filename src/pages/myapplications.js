import Header from "../components/Header";
import c from "../styles.module.css";

const MyApplications = ({ applications }) => {
  return (
    <>
      <Header />
      <main className="container">
        My saved courses
        <ul>
          {applications.map(
            ({ id, course, deliveryMethod, location, language }) => {
              {
              }
              return (
                <li className={c.listItem} key={id}>
                  <article>
                    <p>
                      <strong>course:</strong> {course}
                    </p>
                    <p>
                      <strong>deliveryMethod:</strong> {deliveryMethod}
                    </p>
                    <p>
                      <strong>location:</strong> {location}
                    </p>
                    <p>
                      <strong>language:</strong>{" "}
                      {language ? course.language : "not specified"}
                    </p>
                  </article>
                </li>
              );
            }
          )}
        </ul>
      </main>
    </>
  );
};

export default MyApplications;

export async function getStaticProps() {
  const res = await fetch("http://localhost:8000/applications");
  const applications = await res.json();
  return { props: { applications } };
}
