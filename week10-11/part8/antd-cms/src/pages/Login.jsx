import { Button, Checkbox, Flex, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigation = useNavigate();

  const onFinish = (values) => {
    console.log(values);
    navigation("/dashboard");
  };

  return (
    <article
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 580px",
        height: "100%",
      }}
    >
      <Flex
        align="center"
        justify="center"
        style={{
          background:
            "linear-gradient(180deg,rgba(5,117,230,1) 0% rgba(2,41,138,1) 85% rgba(2,27,121,1) 100%)",
        }}
      >
        <div>
          <h1>ANTD CMS</h1>
          <p>
            Antd cms에 오신걸 완영 합니다. 권한이 필요하니 권한이
            없을시 오스틴 매니저에게 문의해주세요.
          </p>
          <Button type="primary"> 문의하기 </Button>
        </div>
      </Flex>
      <Flex align="center" justify="center">
        <div style={{ width: 300 }}>
          <h2>Hello Admin!</h2>

          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
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
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Flex>
    </article>
  );
};

export default Login;
