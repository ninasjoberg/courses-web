import { useState } from "react";
import c from "./styles.module.css";

const ApplyModal = ({
  course: { institute, course, courseId },
  cancel,
  open,
}) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const disableApply = !userName || !email;

  const applyCourse = async ({ courseId, userName, email }) => {
    const res = await fetch(`http://localhost:8000/applications/${courseId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, userName }),
    });

    if (res.ok) {
      cancel();
    } else {
      const message = await res.text();
      setError(message);
    }
  };

  return (
    <dialog open={open}>
      <article>
        <h2>Application</h2>
        <p>{institute}</p>
        <p>{course}</p>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          aria-label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="name"
          name="name"
          value={userName}
          placeholder="Name"
          aria-label="Name"
          onChange={(e) => setUserName(e.target.value)}
        />
        {error && <p className={c.error}>{error}</p>}
        <footer>
          <button onClick={cancel} className="secondary">
            Cancel
          </button>
          <button
            disabled={disableApply}
            onClick={() => applyCourse({ userName, email, courseId })}
          >
            Apply
          </button>
        </footer>
      </article>
    </dialog>
  );
};

export default ApplyModal;
