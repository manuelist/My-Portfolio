import React, { useState } from "react";
import classes from "../../styles/form.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
  };
  return (
    <form className={`${classes.form}`} onSubmit={submitHandler}>
      <div className={`${classes.form__group}`}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={5}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <button className="primary__btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
