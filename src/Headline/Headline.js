import React, { Component } from "react";
import YouTube from "react-youtube";
import "./Headline.css";

export default class Headline extends Component {
  render() {
    const opts = {
      height: "500",
      width: "100%",
      playerVars: {
        autoplay: 1,
        mute: 1,
      },
    };

    return (
      <>
        <div className="full-screen">
          <section className="headline full-screen">
            <h1 className="headline-text">Hello, my name is Nicholas.</h1>
            <h1 className="headline-text">
              I'm a fullstack developer and aspiring video game designer.
            </h1>
            <div className="youtube">
              <YouTube
                videoId="LYcv1JZByR4"
                opts={opts}
                onReady={this._onReady}
              />
            </div>
          </section>
        </div>
      </>
    );
  }
}
