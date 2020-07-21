/* --- carousel.js --- */

import React, { Fragment, useContext, useState } from "react";
// import Context from "../../contexts/Context";
import "./Carousel.css";

const Carousel = (props) => {
  // const Con = useContext(Context);

  const [state, setState] = useState({ angle: 0, project: 1 });

  const spinnerRef = React.useRef();

  const galleryspin = (sign) => {
    if (!sign) {
      setState((oldVals) => ({ ...oldVals, angle: state.angle + 45 }));
      if (state.project < 8) {
        setState((oldVals) => ({ ...oldVals, project: state.project + 1 }));
      } else {
        setState((oldVals) => ({ ...oldVals, project: 1 }));
      }
    } else {
      setState((oldVals) => ({ ...oldVals, angle: state.angle - 45 }));
      if (state.project > 1) {
        setState((oldVals) => ({ ...oldVals, project: state.project - 1 }));
      } else {
        setState((oldVals) => ({ ...oldVals, project: 8 }));
      }
    }
  };

  return (
    <Fragment>
      <div className="fade-in-bottom">
        <div id="carousel">
          <figure
            style={{ transform: `rotateY(${state.angle}deg` }}
            ref={spinnerRef}
            id="spinner"
          >
            <img
              className="image"
              src="https://i.imgur.com/lfpMic5.jpg"
              alt="Coattails"
            />
            <img
              className="image"
              src="https://i.imgur.com/PLCJ62s.png"
              alt="Project Blackburn"
            />
            <img
              className="image"
              src="https://i.imgur.com/0ddRuhX.png"
              alt="Noteful"
            />
            <img
              className="image"
              src="https://i.imgur.com/dqsvBWb.png"
              alt="Space Quiz"
            />
            <img
              className="image"
              src="https://i.imgur.com/AOlX6VF.png"
              alt="Bookmarks"
            />
            <img
              className="image"
              src="https://i.imgur.com/AbQNQ86.png"
              alt="Spaced Repetition"
            />
            <img
              className="image"
              src="https://i.imgur.com/t3CJpMe.png"
              alt="Petful"
            />
            <img
              className="image"
              src="https://i.imgur.com/Gu9IOvZ.png"
              alt="VGFinder"
            />
          </figure>
        </div>
        <span
          style={{ float: "left" }}
          className="ss-icon"
          onClick={() => {
            galleryspin("");
          }}
        >
          &lt;
        </span>
        <span
          style={{ float: "right" }}
          className="ss-icon"
          onClick={() => {
            galleryspin("-");
          }}
        >
          &gt;
        </span>
        <div>
          {/* <Project project={Con.projects.find((p) => p.id === state.project)} /> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Carousel;
