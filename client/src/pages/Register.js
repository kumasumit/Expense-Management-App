import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
const Register = () => {
  //here we use useForm hook of react
  const [form] = Form.useForm();
  //form submit handler here
  const submitHandler = (values) => {
    //here we dont have event we have values
    console.log("Success:", values);
  };
  //form error handler here
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //form reset handler here
  const onReset = () => {
    form.resetFields();
  };
  return (
    <>
      <div className="register-page">
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
