import React, { useState } from "react";
import { Button, Flex, Form, Input, Checkbox } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import appwriteauth from "../appwrite/appWriteAuth";
import { Link, useNavigate } from "react-router-dom";

interface IValues {
  name: string;
  email: string;
  password: string;
}

const SignUpPage: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const onFinish = async (values: IValues) => {
    console.log("Received values of form: ", values);
    setError("");
    try {
      const userData = await appwriteauth.signup(values);
      if (userData) {
        navigate("/login");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        console.log(error);
      }
    }

    form.resetFields();
  };

  return (
    <Flex justify="center" align="center">
      <Form
        name="SignUp"
        form={form}
        initialValues={{ remember: true }}
        style={{ maxWidth: 360 }}
        onFinish={onFinish}
        className="border rounded-md p-5"
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your Fullname!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your E-mail!",
              type: "email",
            },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="E-mail" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please input your Password!", min: 8 },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="">Forgot password</a>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Sign Up
          </Button>
          or <Link to="/login">Login Now!</Link>
        </Form.Item>
      </Form>
      {error && <p>{error}</p>}
    </Flex>
  );
};

export default SignUpPage;
