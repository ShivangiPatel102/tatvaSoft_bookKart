import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { Button } from "@material-ui/core";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  return (
    <div className="loginForm">
      <div className="formContainer">
        {/* Left Section - New Customer  */}
        <div className="loginLeft">
          <div className="left-top">
            <h2>New Customer</h2>
            <div className="divider"></div>
            <p>Registration is free and easy.</p>
            <ul>
              <li>Faster Checkout</li>
              <li>Save Multiple Shipping Address</li>
              <li>View and Track orders and more</li>
            </ul>
          </div>
          <div className="left-bottom">
            <Button
              variant="contained"
              type="submit"
              style={{backgroundColor:"#f14d54", color:"white", width:"220px", height:"45px"}}
            >
              Register
            </Button>
          </div>
        </div>

        {/* Right Section - Email and Password */}
        <div className="loginRight">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <h2>Login Information</h2>
              <hr />

              <Field
                type="email"
                name="email"
                placeholder="Email Address"
                className="input-field"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />

              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="input-field"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
              <div className="loginBtn">
                <Button variant="contained" style={{backgroundColor:"#f14d54", color:"white", width:"100px", height:"45px"}} type="submit">
                  Login
                </Button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
