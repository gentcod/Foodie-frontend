import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./globalStyle";

import 'leaflet/dist/leaflet.css'
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./components/loading/loading.component";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={<Loading/>} persistor={persistor}>
          <BrowserRouter>
            <GlobalStyle/>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
