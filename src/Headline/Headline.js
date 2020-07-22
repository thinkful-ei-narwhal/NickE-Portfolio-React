import React, { Component } from "react";
import "./Headline.css";

export default class Headline extends Component {
  render() {
    return (
      <>
        <section className="headline">
          <h1 className="headline-text">Hello, my name is Nicholas.</h1>
          <h1 className="headline-text">
            I'm a fullstack developer and aspiring video game designer.
          </h1>
        </section>
      </>
    );
  }
}
