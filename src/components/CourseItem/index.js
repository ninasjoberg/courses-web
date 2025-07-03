import { useState } from "react";
import ApplyModal from "../ApplyModal";
import c from "./styles.module.css";

const CourseItem = ({
  course: {
    id,
    courseId,
    course,
    deliveryMethod,
    location,
    language,
    institute,
  },
  saveCourse,
}) => {
  const [applyCourseId, setApplyCourseId] = useState(false);
  const noLang = !language || language === "NULL";
  const lang = noLang ? "not specified" : language;

  return (
    <div key={id} className={c.courseWrapper}>
      <ApplyModal
        open={applyCourseId === courseId}
        course={{ course, courseId, institute }}
        cancel={() => setApplyCourseId(null)}
      />
      <h2>{institute}</h2>
      <div className={c.buttonWrapper}>
        <button onClick={saveCourse}>Save course</button>
        <button onClick={() => setApplyCourseId(courseId)}>Apply</button>
      </div>
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
        <strong>language:</strong> {lang}
      </p>
    </div>
  );
};

export default CourseItem;
