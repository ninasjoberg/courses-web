import Header from "../components/Header";
import c from "../styles.module.css";

const SavedCourses = ({ savedCourses }) => {
  return (
    <>
      <Header />
      <main className="container">
        <h1>My saved courses</h1>
        <ul>
          {savedCourses.map((course) => {
            return (
              <li className={c.listItem} key={course.id}>
                <article>
                  <p>
                    <strong>course:</strong> {course.course}
                  </p>
                  <p>
                    <strong>deliveryMethod:</strong> {course.deliveryMethod}
                  </p>
                  <p>
                    <strong>location:</strong> {course.location}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default SavedCourses;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8000/courses/savedcourses");
  const savedCourses = await res.json();
  return { props: { savedCourses } };
}
