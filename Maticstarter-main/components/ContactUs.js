import React, { useState } from "react";
import AnimatedContainer from "./AnimatedContainer";
import {
  Button,
  ContactUsHeader,
  ErrorMessage,
  FormGroup,
  InputWrapper,
  Separator,
} from "./styles";
import { sendemail } from "../utilities";

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function ContactUs(props) {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [projectNameError, setProjectNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectName, setProjectName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = () => {
    let invalid = false;
    if (loading || sent) {
      return;
    }
    if (name === "") {
      setNameError(true);
      invalid = true;
    }
    if (email === "" && !validateEmail(email)) {
      setEmailError(true);
      invalid = true;
    }
    if (projectName === "") {
      setProjectNameError(true);
      invalid = true;
    }
    if (message === "") {
      setMessageError(true);
      invalid = true;
    }

    if (invalid) return;

    setLoading(true);
    sendemail(
      {
        name,
        projectName,
        message,
        email,
      },
      () => {
        setLoading(false);
        setSent(true);
        setTimeout(() => {
          setSent(false);
        }, 1500);
      }
    );
  };
  return (
    <AnimatedContainer>
      <div style={{ width: "100vw", maxWidth: "1000px", margin: "auto" }}>
        <ContactUsHeader className="d-flex mb-5 align-items-center">
          <div className="col-12 col-md-6">
            <h2 className="mb-2">
              Developing a project? <br />
              Let’s Talk!
            </h2>
            <h5 style={{ fontSize: "14px" }}>
              Drop us a message, we'd love to hear <br /> more about your
              project!
            </h5>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img src="/images/bigRocket.png" />
          </div>
        </ContactUsHeader>
      </div>
      <div
        className="d-flex flex-wrap"
        style={{ maxWidth: "1100px", margin: "auto" }}
      >
        <FormGroup className="col-12 col-md-4 d-flex justify-content-start">
          <InputWrapper error={nameError}>
            <label>Full Name*</label>
            <input
              value={name}
              onChange={(e) => {
                if (e.target.value) {
                  setNameError(false);
                } else {
                  setNameError(true);
                }
                setName(e.target.value);
              }}
              onBlur={() => {
                if (name) {
                  setNameError(false);
                }
              }}
            />
            {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
          </InputWrapper>
        </FormGroup>
        <FormGroup className="col-12 col-md-4 d-flex justify-content-center">
          <InputWrapper error={emailError}>
            <label>Email*</label>
            <input
              value={email}
              onChange={(e) => {
                if (e.target.value && validateEmail(e.target.value)) {
                  setEmailError(false);
                } else {
                  setEmailError(true);
                }
                setEmail(e.target.value);
              }}
            />
          </InputWrapper>
        </FormGroup>
        <FormGroup className="col-12 col-md-4 d-flex justify-content-end">
          <InputWrapper error={projectNameError}>
            <label>Project Name*</label>
            <input
              value={projectName}
              onChange={(e) => {
                if (e.target.value) {
                  setProjectNameError(false);
                } else {
                  setProjectNameError(true);
                }
                setProjectName(e.target.value);
              }}
            />
          </InputWrapper>
        </FormGroup>
        <Separator />
        <div className="col-12">
          <InputWrapper textarea error={messageError}>
            <label>Message</label>
            <textarea
              value={message}
              onChange={(e) => {
                if (e.target.value) {
                  setMessageError(false);
                } else {
                  setMessageError(true);
                }
                setMessage(e.target.value);
              }}
            />
          </InputWrapper>
        </div>
        <div className="col-12 mt-4 d-flex justify-content-end">
          <Button width="140px" onClick={sendEmail}>
            {loading && "Loading..."}
            {sent && "Sent"}
            {!loading && !sent && "Submit"}
          </Button>
        </div>
      </div>
    </AnimatedContainer>
  );
}

export default ContactUs;
