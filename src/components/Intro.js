import React, { useRef, useEffect } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
// import { init } from "ityped";

const Intro = () => {
  // const animatedTextRef = useRef();

  // useEffect(() => {
  //   init(animatedTextRef.current, {
  //     showCursor: true,
  //     backDelay: 5000,
  //     backSpeed: 60,
  //     placeholder: false,
  //     strings: ["Я front-end разработчик."],
  //   });
  // }, []);

  return (
    <section className="intro">
      <div className="container ">
        <h1 className="intro__title">
          Привет, Меня зовут <span>Нурболот</span>
        </h1>
        <h2>
          {/* <span ref={animatedTextRef}></span> */}
          <span>Я front-end разработчик.</span>
        </h2>

        <a href="#aboutme">
          <KeyboardDoubleArrowDownIcon className="intro__icon" />
        </a>
      </div>
    </section>
  );
};

export default Intro;
