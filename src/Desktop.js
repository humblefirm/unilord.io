import Gnb from "./component/Desktop/gnb";
import Home from "./component/Desktop/home";
import About from "./component/Desktop/about";
import Services from "./component/Desktop/services";
import Reference from "./component/Desktop/reference";
import Disclaimer from "./component/Desktop/disclaimer";
import Modal from "./component/Desktop/modal";
import React, { useState, useEffect } from "react";

function Desktop() {
  const [display, setDisplay] = useState(false);
  const [type, setType] = useState("pool");
  const [choosen, choise] = useState("Home");

  const position = [
    "Home",
    "About",
    "Services",
    "Services",
    "Reference",
    "Disclaimer"
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => onScroll());

    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, []);

  const onScroll = e => {
    choise(position[(window.scrollY / window.innerHeight).toFixed()]);
  };

  return (
    <div className="Desktop">
      <Gnb choosen={choosen} choise={choise} />
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
