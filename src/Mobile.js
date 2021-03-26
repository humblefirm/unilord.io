import Gnb from "./component/Mobile/gnb";
import Home from "./component/Mobile/home";
import About from "./component/Mobile/about";
import Services from "./component/Mobile/services";
import Reference from "./component/Mobile/reference";
import Disclaimer from "./component/Mobile/disclaimer";
import Modal from "./component/Mobile/modal";
import React, { useState } from "react";

function Mobile() {
  const [display, setDisplay] = useState(false);
  const [displayS, setDisplayS] = useState(false);
  const [type, setType] = useState("pool");
  return (
    <div className="Mobile">
      <Gnb display={display} setDisplay={setDisplay} />
      <Home />
      <About />
      <Services setType={setType} display={displayS} setDisplay={setDisplayS} />
      <Reference />
      <Disclaimer />
      <Modal type={type} display={displayS} setDisplay={setDisplayS} />
      <img
        src="./images/btn-hbg.svg"
        onClick={() => {
          setDisplay(!display);
        }}
        style={{
          position: "fixed",
          wdith: "20px",
          height: "20px",
          left: "calc(100vw - 40px)",
          top: "20px"
        }}
      />
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

export default Mobile;
