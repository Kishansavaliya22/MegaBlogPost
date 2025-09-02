import React, { useState } from "react";
import { Button, Flex, Form, Input, Checkbox } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import appwriteauth from "../appwrite/appWriteAuth";
import { storeLogin } from "../store/authSlice";

interface IValues {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const onFinish = async (values: IValues) => {
    console.log("Received values of form: ", values);
    setError("");
    try {
      const userData = await appwriteauth.login(values);
      if (userData) {
        const userData = await appwriteauth.getCurrentUser();
        if (userData) dispatch(storeLogin(userData));
        navigate("/");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <Flex justify="center" align="center">
      <Form
        name="login"
        form={form}
        initialValues={{ remember: true }}
        style={{ maxWidth: 360 }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your E-mail!" }]}
        >
          <Input prefix={<MailOutlined />} placeholder="E-mail" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
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
            Log in
          </Button>
          or <a href="">Register now!</a>
        </Form.Item>
      </Form>
      {error && <p>{error}</p>}
    </Flex>
  );
};

export default LoginPage;
