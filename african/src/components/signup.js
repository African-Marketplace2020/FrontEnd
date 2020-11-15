import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";


//YUP VALIDATION FORMSCHEMA
const formSchema = yup.object().shape({
 username: yup
    .string()
    .email("Must be a valid email address")
    .required("Must include email address"),
  password: yup
    .string()
    .min(8, "Passwords must be at least 8 characters long.")
    .required("Password is Required"),
 Role: yup.string().required("Role is a required field"),
  terms: yup.boolean().oneOf([true], "You must agree to terms of use"),
});

function Form() {
  const history = useHistory();
  //STATES FOR THE FORM VALUES
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    role: "",
    terms: false,
  });

  //BUTTON DISABLING WHEN FORM FAILS TO PASS VALIDATION
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  //ERROR STATE
  const [error, setError] = useState({
    username: "",
    password: "",
    role: "",
    terms:"",
  });

  //VALIDATION FN
  const validate = (e) => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    yup
      //THIS GOES TO THE SCHEMA WE PREVIOUSLY CREATED AND RETRIEVE THE INFORMATION FOR VALIDATION
      .reach(formSchema, e.target.name)
      .validate(value)
      //THIS CLEARS THE ERROR MESSAGE IF FORM PASSES VALIDATION
      .then((valid) => {
        setError({
          ...error,
          [e.target.name]: "",
        });
      })
      //IF VALIDATION FAILS THIS RETRIEVES THE ERROR WE CREATED IN OUR SCHEMA
      .catch((err) => {
        setError({
          ...error,
          [e.target.name]: err.errors[0],
        });
      });
  };

  //ONCHANGE FN
  const handleChange = (e) => {
    e.persist(); //ALLOWS US TO RUN IT ASYNC
    validate(e);
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  //ON SUBMISSION FN
  const formSubmit = (e) => {
    e.preventDefault(); // PREVENTS FORM FROM CLEARING
    console.log("FORM SUBMITTED");
    //SENDS THE INFORMATION FROM THE POST TO SERVER
    console.log(formState);
    const { terms, ...user } = formState;
    axios
      .post("", user)
      .then((res) => {
        history.push("/login");
      })
      // .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  //FORM
  return (
    <div>
      <NavBar />
      <div className="form">
        <form
          className=" shadow p-3 bg-white rounded"
          onSubmit={formSubmit}
        >
          <div className="headText">
            <h1>African Marketplace</h1>
          </div>
          <div>
            {" "}
            <h3>Sign Up !</h3>
            <div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">username</span>
                </div>
                <input
                  type="text"
                  aria-label="username"
                  className="form-control"
                  name="username"
                  id="username"
                  value={formState.username}
                  onChange={handleChange}
                />
                  </div>

            <div className="input-group mb-3">
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Password
                </span>
              </div>{" "}
              <input
                type="password"
                className="form-control"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                name="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
                placeholder="don't tell! "
              />
               </div>
              {error.password.length > 0 ? <p>{error.password}</p> : null}
            </div>
               </div>
            <div className="input-group mb-3">
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                 Role
                </span>
              </div>
              <input
                type="Role"
                className="form-control"
                placeholder="Role"
                aria-label="Role"
                aria-describedby="basic-addon2"
                name="role"
                id="role"
                value={formState.role}
                onChange={handleChange}
              />

            <div>
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={formState.terms}
                    onChange={handleChange}
                    aria-label="Checkbox for following text input"
                  />{" "}
                  Terms & Conditions
                </div>
              </div>

              {error.terms.length > 0 ? <p>{error.terms}</p> : null}
            </div>
            <div>
              <button className="button" disabled={buttonDisabled}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Form;
