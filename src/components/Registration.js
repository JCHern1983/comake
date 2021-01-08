import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import {SignupStyle} from './styled-components'
import * as yup from "yup";
import axios from "axios";


const UserForm = ({ values, errors, touched, status }) => {
        const [user, setUser] = useState({}); //adding so we can see the state after submit but not needed for form.

        useEffect(() => {
            if (status) {
                setUser(theUser => ({...user, theUser }));
            }
        }, [user, status]);
        return ( 
            <div>
            <SignupStyle>
            <h1> Sign up here!  </h1>
            <h2>  Already registered ?  </h2>
            <br />
            <Link to="/">
            <button> Sign in here! </button>
          </Link>
            <div className="form">
              <Form>
                <div className="input-field">
                  <label>
                    <span> Email </span>
                    {touched.email && errors.email && <p> {errors.email} </p>}
                    <Field type="text" name="username" placeholder="username" />
                  </label>
                </div>
                <br />
                <div className="input-field">
                  <label>
                    <span> Password </span> <br />
                    {touched.password && errors.password && (
                      <p> {errors.password} </p>
                    )}
                    <Field type="password" name="password" placeholder="password" />
                  </label>
                </div>
                <br/>
                <div className="button">
                  <button type="submit"> Register! </button>
                </div>
              </Form>
            </div>
          </SignupStyle>
            
            </div>
        )
        };

        const FormikUserForm = withFormik({
            mapPropsToValues({ username, password }) {
                return {
                    username: username || "",
                    password: password || ""
                };
            },
            validationSchema: yup.object().shape({
                username: yup
                    .string()
                    .min("3", "Username must be 3 characters or more")
                    .required("You must provide a username."),
                password: yup
                    .string()
                    .min("4")
                    .required("Minimum 4 letters please.")
            }),

            handleSubmit(values, { props }) {
                //console.log("values: ", values);
                axios
                    .post(`https://comake.herokuapp.com/api/auth/register`, values)
                    .then(res => {
                        console.log("POST res", res.data);
                        props.history.push("/userHome");
                        localStorage.setItem("userId", res.data.id);
                        localStorage.setItem("token", res.data.token);
                    })
                    .catch(err => alert(err.response.data.message));
            }
        })(UserForm);

        export default FormikUserForm;
