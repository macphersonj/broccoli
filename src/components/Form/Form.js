import React, { useState } from "react";
import "./form.scss";
import validator from "validator";
import axios from "axios";

function Form(props) {
  const [formSuccess, setFormSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    usedEmail: "",
  });
  const [submitBtn, setSubmitBtn] = useState("Send");
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const validation = () => {
    let nameInvalid = "";
    let emailInvalid = "";

    if (name.length < 3) {
      nameInvalid = "Name must be at least 3 characters";
    }

    if (!validator.isEmail(email)) {
      emailInvalid = "Please enter a valid email address";
    } else if (
      validator.isEmail(email) &&
      !validator.equals(email, confirmEmail)
    ) {
      emailInvalid = "Email doesnt match";
    }

    if (nameInvalid || emailInvalid) {
      setErrors({
        name: nameInvalid,
        email: emailInvalid,
        usedEmail: "",
      });

      return false;
    }

    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formValid = validation();

    const postURL =
      "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth";

    if (formValid) {
      setErrors({
        name: "",
        email: "",
        usedEmail: "",
      });
      setSubmitBtn("Sending, please wait...");
      setSubmitDisabled(true);

      axios
        .post(postURL, {
          name: name,
          email: email,
        })
        .then((response) => {
          setFormSuccess(true);
        })
        .catch((error) => {
          setSubmitBtn("Send");
          setSubmitDisabled(false);
          setErrors({
            usedEmail: error.response.data.errorMessage,
          });
        });
    }
  };

  return (
    <div>
      {!formSuccess ? (
        <form onSubmit={submitHandler}>
          <p className="c-formheader">Request an invite</p>
          <input
            className="c-input"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          ></input>
          {errors.name ? (
            <span className="c-form-error">{errors.name}</span>
          ) : null}

          <input
            className="c-input"
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          ></input>

          <input
            className="c-input"
            type="text"
            id="confirmEmail"
            name="confirmEmail"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            placeholder="Confirm email"
          ></input>

          {errors.email ? (
            <span className="c-form-error">{errors.email}</span>
          ) : null}

          <button
            className="c-form-submit"
            type="submit"
            disabled={submitDisabled}
          >
            {submitBtn}
          </button>

          {errors.usedEmail}
        </form>
      ) : (
        <div className="c-form-final">
          <p className="c-formheader">All done</p>
          <p>
            You will be one of the first to experience Broccoli &amp; Co. when
            we launch.
          </p>
          <button className="c-close-modal" onClick={props.onClick}>
            OK
          </button>
        </div>
      )}
    </div>
  );
}

export default Form;
