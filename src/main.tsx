import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import "@ant-design/v5-patch-for-react-19";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <StyleProvider layer>
        <ConfigProvider>
          <App />
        </ConfigProvider>
      </StyleProvider>
    </Provider>
  </StrictMode>
);
