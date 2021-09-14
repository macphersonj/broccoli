import React from "react";
import "./signupmodal.scss";
import Form from "../Form/Form";

function SignupModal(props) {
  return (
    <div className="c-signup-modal-container">
      <div className="c-signup-modal">
        <Form onClick={props.onClick} />
      </div>
    </div>
  );
}

export default SignupModal;
