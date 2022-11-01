import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
  //here we use useForm hook of react
  const [form] = Form.useForm();
  //form submit handler here
  const submitHandler = (values) => {
    //here we dont have event, we have values
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
  //here because we are using ant design we dont need to useState to manage states
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
