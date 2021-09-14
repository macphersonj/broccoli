import React, { useState } from "react";
import Button from "../Button/Button";
import SignupModal from "../SignupModal/SignupModal";
import "../Billboard/billboard.scss";

function Billboard(props) {
  const [signUpForm, setSignUpForm] = useState(false);

  const openModal = () => {
    setSignUpForm(true);
  };

  const closeModal = () => {
    setSignUpForm(false);
  };

  return (
    <div className="c-billboard-container">
      <div className="c-billboard">
        <h1>{props.message}</h1>

        <Button onClick={openModal} text="Request an invite"></Button>
      </div>

      {signUpForm ? <SignupModal onClick={closeModal}></SignupModal> : null}
    </div>
  );
}

export default Billboard;
