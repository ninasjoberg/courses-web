import Header from "../components/Header";
import c from "../styles.module.css";

const SavedCourses = ({ savedCourses }) => {
  return (
    <>
      <Header />
      <main className="container">
        My saved courses
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
                  <p>
                    <strong>language:</strong>{" "}
                    {course.language ? course.language : "not specified"}
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

export async function getStaticProps() {
  const res = await fetch("http://localhost:8000/courses/savedcourses");
  const savedCourses = await res.json();
  return { props: { savedCourses } };
}
