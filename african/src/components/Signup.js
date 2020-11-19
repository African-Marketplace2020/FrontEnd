import React, { setState } from "react";
import axiosWithAuth from "../utilities/axiosWithAuth";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Container, Header, Button, } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const SignupForm = ({ values, errors, touched, isSubmitting, history }) => {

  console.log(history)

  return (
    <div className="SignupBlock">
    <Form>
      <div className="SignupPart">
        <label>
          Username
        </label>
      </div>
      <div className="SignupPart">
        <Field
          type="text"
          name="username"
        />
      {touched.username && errors.username && <p className="error">{errors.username}</p>}
      </div>
      <div className="SignupPart">
        <label>
         Password
        </label>
      </div>
      <div className="SignupPart">
        <Field
          type="password"
          name="password"
        />
      {touched.password && errors.password && (<p className="error">{errors.password}</p>)}
      </div>
      <div className="SignupPart">
        <label>
          Role
        </label>
      </div>
      <div className="SignupPart">
        <Field
          type="text"
          name="Role"
        />
      {touched.Role && errors.Role && <p className="error">{errors.Role}</p>}
      </div>

      <div className="SignupBtns">
        <Button primary type='submit' disabled={isSubmitting}>Sign Up</Button>
        <Button secondary><Link to="/">Cancel</Link></Button>
      </div>
    </Form >
    </div>
  );
}



const Signup = withFormik({
  mapPropsToValues({ username, password, Role }) {
    return {
      username: username || "",
      password: password || "",
      Role: Role || "",

    }
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().min(8, "Password must be at least eight characters").required("Password is required"),
    ROLE: Yup.string().required(" Role is required"),

  }),

  handleSubmit(values, { props, setErrors }) {
    //event.preventDefault();
    if (!values.username) {
      setErrors({ username: "Username is required." });
    } else if (!values.password) {
      setErrors({ password: "Password is required" });
    } else if (values.password && values.password.length < 8) {
      setErrors({ password: "Password must be at least eight characters" })
      //} else if (this.validationSchema.validateAt({ email:  })) {
      // setErrors({ email: "Please enter a valid email" });
    } else if (!values.Role) {
      setErrors({ Role: "Role is required" });
      console.log("In else clause");

      axiosWithAuth()
        .post('/signup', values)
        .then(res => {
          console.log("Successful signup", res);
          props.history.push('/');
        })
        .catch(err => console.log('Oh-oh, something wrong', err));
    }
  },

})(SignupForm);


function SignupPageHeader(props) {
  return (
    <Container text>
      <Header as='h2'>Welcome to the African Marketplace App!</Header>
      <Header as='h3'>Complete this form to create a new account.</Header>
      <Signup {...props} />
    </Container>
  );
}




export default SignupPageHeader;