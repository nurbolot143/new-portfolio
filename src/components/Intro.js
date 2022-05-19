import React, { useRef, useEffect } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { init } from "ityped";

const Intro = () => {
  const animatedTextRef = useRef();

  useEffect(() => {
    init(animatedTextRef.current, {
      showCursor: true,
      backDelay: 5000,
      backSpeed: 60,
      placeholder: false,
      strings: ["I am front-end developer."],
    });
  }, []);

  return (
    <section className="intro">
      <div className="container ">
        <h1 className="intro__title">
          Hello, I'm <span>Nurbolot Boobekov.</span>
        </h1>
        <h2>
          <span ref={animatedTextRef}></span>
        </h2>

        <a href="#aboutme">
          <KeyboardDoubleArrowDownIcon className="intro__icon" />
        </a>
      </div>
    </section>
  );
};

export default Intro;
