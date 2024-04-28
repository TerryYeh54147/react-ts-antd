import { createContext } from "react";
import { ThemeConfig } from 'antd'

const lightTheme: ThemeConfig = {
  token: {
    colorPrimary: "#aadaf4",
    colorBgContainer: "#ffffff",
    colorText: "#000000",
  },
  components: {
    Layout: {
      triggerBg: "#ffffff",
      triggerColor: "#000000",
    }
  }
};
const darkTheme: ThemeConfig = {
  token: {
    colorPrimary: "#161A30",
    colorBgContainer: "#001529",
    colorText: "#ffffff",
  }, components: {
    Layout: {
      triggerBg: "#001529",
      triggerColor: "#ffffff",
    }
  }
};

export const themes: Record<string, ThemeConfig> = {
  light: lightTheme,
  dark: darkTheme,
}
// default light theme
export const themeContext = createContext({
  isLightMode: true,
  setLightMode: (val: boolean) => { }
});

