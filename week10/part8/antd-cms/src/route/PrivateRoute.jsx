import {
  BookOutlined,
  CreditCardOutlined,
  HomeOutlined,
  LoginOutlined,
  NotificationOutlined,
  SettingOutlined,
  SnippetsOutlined,
  TransactionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  ConfigProvider,
  Dropdown,
  Layout,
  Menu,
} from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

const dropdownItems = [
  {
    key: "setting",
    label: <Link>설정</Link>,
    icon: <SettingOutlined />,
  },
  {
    key: "logout",
    label: <Link to="login">로그아웃</Link>,
    icon: <LoginOutlined />,
  },
];

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Dashboard", "dashboard", <HomeOutlined />),
  getItem("컨텐츠 관리", "content", <NotificationOutlined />, [
    getItem("배너", "banner"),
    getItem("팝업", "popup"),
  ]),
  getItem("결제 관리", "transactions", <TransactionOutlined />),
  getItem("카드 관리", "creditcards", <CreditCardOutlined />),
  getItem("공지사항 관리", "notice", <SnippetsOutlined />),
  getItem("계정 관리", "accounts", <UserOutlined />, [
    getItem("권한", "myprivileges"),
    getItem("설정", "settings"),
  ]),
];

const PrivateRoute = () => {
  const { pathname } = useLocation();
  const [, main, sub] = pathname.split("/");
  const [collapsed, setCollapsed] = useState(false);
  const selected = sub ? [sub, main] : [main];
  const navigate = useNavigate();

  useEffect(() => {
    !selected[0] && navigate("/dashboard");
  }, [navigate, selected]);

  const getCurrentTitle = () => items.find((e) => e.key === main);

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: "#fff",
            bodyBg: "rgb(242,245,249)",
            headerHeight: 100,
          },
        },
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          theme="light"
        >
          <div
            style={{ display: "flex", gap: 10, padding: "30px 38px" }}
          >
            <BookOutlined
              style={{
                fontWeight: "bold",
                fontSize: 30,
                color: "#0575E6",
              }}
            />
            <h1
              style={{
                fontWeight: "bold",
                fontSize: 25,
                color: "#0575E6",
              }}
            >
              ANTD CMS
            </h1>
          </div>
          <Menu
            selectedKeys={selected}
            items={items}
            mode="inline"
            onClick={({ item, key, keyPath, domEvent }) => {
              const [page, parents] = keyPath;
              const moveTo = parents
                ? `/${parents}/${page}`
                : `${page}`;
              navigate(moveTo);
            }}
          />
        </Sider>

        <Layout>
          <Header
            style={{
              padding: "20px, 40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2>{getCurrentTitle()?.label}</h2>
            <Dropdown
              menu={{ items: dropdownItems }}
              placement="bottom"
            >
              <Badge count={5}>
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
              </Badge>
            </Dropdown>
          </Header>
          <Content style={{ padding: "24px 40px" }}>
            <Outlet />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design {new Date().getFullYear()} Created By Ant UED
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default PrivateRoute;
