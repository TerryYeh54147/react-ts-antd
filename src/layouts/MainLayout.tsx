import React, { useContext, useState, useEffect } from "react";
import {
  HomeOutlined,
  UserOutlined,
  SunOutlined,
  MoonOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Switch, Layout, Menu, Flex, theme, Space } from "antd";
import { ChildComp } from "@/models/components";
import { NavLink } from "react-router-dom";

import Title from "@/layouts/Title";
import { themeContext } from "@/store/themeContext";
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<NavLink to="/">Home</NavLink>, "1", <HomeOutlined />),
  getItem(<NavLink to="/profile">Profile</NavLink>, "2", <UserOutlined />),
];

const App: React.FC<ChildComp> = ({ children }) => {
  const { isLightMode, setLightMode } = useContext(themeContext);
  const toggleMode = (val: boolean) => {
    setLightMode(val);
  };
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    console.log(`[Maylayout] isDarkMode ${isLightMode}`);
  }, [isLightMode]);

  const {
    token: { colorBgContainer, borderRadiusLG, colorText },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ background: colorBgContainer }}
      >
        <Title collapsed={collapsed} fontColor={colorText} />
        <Menu
          theme={isLightMode ? "light" : "dark"}
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Flex align="center" justify="flex-end">
            <Space align="center" size="small">
              <Switch
                checked={isLightMode}
                onChange={toggleMode}
                checkedChildren={<SunOutlined />}
                unCheckedChildren={<MoonOutlined />}
              ></Switch>
            </Space>
          </Flex>
        </Header>
        <Content style={{ background: colorBgContainer }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,

              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center", background: colorBgContainer }}>
          Coypright ©2024 Created by terry54147@outlook.com
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
