import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  //here we use useForm hook of react
  const [form] = Form.useForm();
  //form submit handler here
  const submitHandler = async (values) => {
    //here we dont have event we have values
    console.log("Success:", values);
    try {
      setLoading(true);
      await axios.post("/users/register", values);
      // ask rahul >>> ?????
      // setLoading ko false kab karna hain bhai
      setLoading(false);
      message.success("Registration Successful");

      // after registration we redirect to login page
      navigate("/login");
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

  return (
    <>
      <div className="register-page">
        {/* if loading is true only then show the spinner, else show the form */}
        {loading && <Spinner />}
        <Form
          form={form}
          layout="vertical"
          onFinish={submitHandler}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h1>Register Form</h1>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
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
                message: "Please input your password!",
              },
            ]}
          >
            <Input type="password" />
          </Form.Item>
          <div className="form-footer-layout">
            <Link to="/login" className="space-margin">
              Already Registered ? Login
            </Link>
            <button
              className="btn btn-secondary space-margin"
              onClick={onReset}
            >
              Reset
            </button>
            <button className="btn btn-primary space-margin">Register</button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Register;
