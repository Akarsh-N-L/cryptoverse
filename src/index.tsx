import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  HomePage,
  Exchanges,
  CryptoCurrencies,
  CryptoDetails,
  News,
} from "./components";
import { Provider } from "react-redux";
import store from "./app/store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path=""
      element={
        <Provider store={store}>
          <App />
        </Provider>
      }
    >
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/exchanges" element={<Exchanges />}></Route>
      <Route
        path="/cryptocurrencies"
        element={<CryptoCurrencies coins={50} cards={false} />}
      ></Route>
      <Route path="/crypto/:coinId" element={<CryptoDetails />}></Route>
      <Route path="/news" element={<News size={10} />}></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
