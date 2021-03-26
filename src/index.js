import React from "react";
import ReactDOM from "react-dom";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import reportWebVitals from "./reportWebVitals";
import { BrowserView, MobileView } from "react-device-detect";

ReactDOM.render(
  <React.StrictMode>
    <BrowserView>
      <Desktop />
    </BrowserView>
    <MobileView>
      <Mobile />
    </MobileView>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
