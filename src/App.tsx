import { Suspense, useContext, useState, useEffect } from "react";
import "./App.css";
import Route from "@/routers/index";
import { ConfigProvider } from "antd";
import { themes, themeContext } from "./store/themeContext";

function App() {
  const { isLightMode } = useContext(themeContext);
  const [curIsLightMode, setLightMode] = useState(isLightMode);

  useEffect(() => {
    console.log(`isLightMode ${isLightMode}`);
  }, [isLightMode]);
  return (
    <Suspense>
      <themeContext.Provider
        value={{ isLightMode: curIsLightMode, setLightMode }}
      >
        <ConfigProvider theme={curIsLightMode ? themes.light : themes.dark}>
          <Route />
        </ConfigProvider>
      </themeContext.Provider>
    </Suspense>
  );
}

export default App;
