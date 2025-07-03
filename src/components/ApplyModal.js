import { useState } from "react";

const ApplyModal = ({
  course: { institute, course, courseId },
  handleSubmit,
  cancel,
  open,
}) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const disableApply = !userName || !email;

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
        <footer>
          <button onClick={cancel} class="secondary">
            Cancel
          </button>
          <button
            disabled={disableApply}
            onClick={() => handleSubmit({ userName, email, courseId })}
          >
            Apply
          </button>
        </footer>
      </article>
    </dialog>
  );
};

export default ApplyModal;
