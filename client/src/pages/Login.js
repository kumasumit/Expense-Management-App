import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //here we use useForm hook of react
  const [form] = Form.useForm();
  //form submit handler here
  const submitHandler = async (values) => {
    //here we dont have event, we have values
    console.log("Success:", values);
    try {
      setLoading(true);
      //here we are destructuring data from response.data object
      const { data } = await axios.post("/users/login", values);
      // ask rahul >>> ?????
      // setLoading ko false kab karna hain bhai
      setLoading(false);
      message.success("Login Successful");
      // after login is sucessfull, we save the user to local storage and make password blank, because we dont want to save password in localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );

      // after login we redirect to home page
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("Invalid Credentials", error);
    }
  };
  //form error handler here
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //form reset handler here
  const onReset = () => {
    form.resetFields();
  };
  //prevent logged in user from accessing register/signup page
  useEffect(() => {
    if (localStorage.getItem("user")) {
      //if user is logged in we redirect to home page
      navigate("/");
    }
    //here we add navigate as a dependency, whenever the navigate changes the register compoent is rendered,
    //ask rahul >>> flow of useEffect here
  }, [navigate]);
  //here because we are using ant design we dont need to useState to manage states
  return (
    <>
      <div className="login-page">
        {loading && <Spinner />}
        <Form
          form={form}
          layout="vertical"
          onFinish={submitHandler}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h1>Login Form</h1>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your passwords!",
              },
            ]}
          >
            <Input type="password" />
          </Form.Item>
          <div className="form-footer-layout">
            <Link to="/register" className="space-margin">
              Not Registered ? Click here to Register
            </Link>
            <button
              className="btn btn-secondary space-margin"
              onClick={onReset}
            >
              Reset
            </button>
            <button className="btn btn-primary space-margin">Login</button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
