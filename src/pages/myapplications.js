import Header from "../components/Header";

const MyApplications = ({ applications }) => {
  console.log("applications", applications);
  return (
    <div>
      <Header />
      My saved courses
      <ul>
        {applications.map(
          ({ id, course, deliveryMethod, location, language }) => {
            {
            }
            return (
              <li key={id}>
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
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default MyApplications;

export async function getStaticProps() {
  const res = await fetch("http://localhost:8000/applications");
  const applications = await res.json();
  return { props: { applications } };
}
