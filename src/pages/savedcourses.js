import Header from "../components/Header";

const SavedCourses = ({ savedCourses }) => {
  console.log("savedCourses", savedCourses);
  return (
    <div>
      <Header />
      My saved courses
      <ul>
        {savedCourses.map((course) => {
          return (
            <li key={course.id}>
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
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SavedCourses;

export async function getStaticProps() {
  const res = await fetch("http://localhost:8000/courses/savedcourses");
  const savedCourses = await res.json();
  return { props: { savedCourses } };
}
