import Gnb from "./component/Desktop/gnb";
import Home from "./component/Desktop/home";
import About from "./component/Desktop/about";
import Services from "./component/Desktop/services";
import Reference from "./component/Desktop/reference";
import Disclaimer from "./component/Desktop/disclaimer";
import Modal from "./component/Desktop/modal";
import React, { useState } from "react";

function Desktop() {
  const [display, setDisplay] = useState(false);
  const [type, setType] = useState("pool");
  return (
    <div className="Desktop">
      <Gnb />
      <Home />
      <About />
      <Services setType={setType} display={display} setDisplay={setDisplay} />
      <Reference />
      <Disclaimer />
      <Modal type={type} display={display} setDisplay={setDisplay} />
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
          background-color: black;
        }
      `}</style>
    </div>
  );
}

export default Desktop;
