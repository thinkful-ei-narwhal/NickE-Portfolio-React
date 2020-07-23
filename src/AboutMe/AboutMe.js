import React, { Component } from "react";
import "./AboutMe.css";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="full-screen">
      <article className="about-me headline-2-text" id="anchor1">
        <div className="header-container">
          <h2 className="aboutme-color">About Me</h2>
        </div>
        <div className="content-container">
          <p className="p-text">
            I began my coding journey when I took up video game development as a
            hobby. I immediately fell in love with coding and taught myself
            enough to switch professions from a technical writer to automation
            engineer.
          </p>
          <p className="p-text">
            However, I quickly realized that I was more suited for web
            development, and so I enrolled in the Thinkful Front End Web
            Development bootcamp. I regard coding as an interactive art form and
            enjoy transforming logic statements into an experience for the user.
            I'm excited to work on a team with other skilled developers in
            achieving that goal.
          </p>
          <p className="p-text">
            When I'm not on the clock, you’ll find me developing my indie video
            game or enjoying the outdoors while listening to audio books.
          </p>
        </div>
      </article>
      </div>
    );
  }
}
