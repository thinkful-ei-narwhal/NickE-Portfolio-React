import React, { Component } from "react";
import "./GameCarousel.css";

export default class GamesCarousel extends Component {
  state = {
    currentSlide: 0,
    loaded: true,
    reel: [
      {
        imgUrl: "https://i.imgur.com/lfpMic5.jpg",
        site: "https://thenevel.itch.io/runefinder",
        link1: "",
        link2: "",
        description:
          "Here is a free demo level of my game, PC only.  I’m currently looking for an artist to help complete the project.  If you’re interested in collaborating, please contact me at runefindergamedev@gmail.com.",
        techStack: "",
      },
      {
        imgUrl: "https://i.imgur.com/PLCJ62s.png",
        site: "https://project-blackburn-client.vercel.app/",
        link1:
          "https://github.com/thinkful-ei-narwhal/project-blackburn-client",
        link2:
          "https://github.com/thinkful-ei-narwhal/project-blackburn-server",
        description: "",
        techStack: "",
      },
      {
        imgUrl: "https://i.imgur.com/Gu9IOvZ.png",
        site: "https://vgfinder.now.sh/",
        link1: "https://github.com/thinkful-ei-narwhal/vgfinder-client-nicke",
        link2:
          "https://github.com/thinkful-ei-narwhal/vgfinder-server-capstone-nicke",
        description: "",
        techStack: "",
      },
      {
        imgUrl: "https://i.imgur.com/t3CJpMe.png",
        site: "https://petful-wheat.vercel.app/adoption",
        link1: "https://github.com/thinkful-ei-narwhal/DSA-Client-Nick-Andrew",
        link2:
          "https://github.com/thinkful-ei-narwhal/DSA-Petful-Server-Nick-Andrew",
        description: "",
        techStack: "",
      },
      {
        imgUrl: "https://i.imgur.com/AbQNQ86.png",
        site: "https://spaced-repetition-eta.vercel.app/",
        link1:
          "https://github.com/thinkful-ei-narwhal/spaced-repetition-client-andrew-nick",
        link2:
          "https://github.com/thinkful-ei-narwhal/spaced-repetition-api-andrew-nick",
        description: "",
        techStack: "",
      },
      {
        imgUrl: "https://i.imgur.com/AOlX6VF.png",
        site: "https://thinkful-ei-narwhal.github.io/NickE-bookmarks-app/",
        link1: "https://github.com/thinkful-ei-narwhal/NickE-bookmarks-app",
        link2: "",
        description: "",
        techStack: "",
      },
      {
        imgUrl: "https://i.imgur.com/0ddRuhX.png",
        site: "https://noteful-app.uncleenzo.now.sh/folder/955365",
        link1: "https://github.com/thinkful-ei-narwhal/noteful-client-nicke",
        link2: "https://github.com/thinkful-ei-narwhal/noteful-server-nicke",
        description: "",
        techStack: "",
      },
      {
        imgUrl: "https://i.imgur.com/dqsvBWb.png",
        site: "https://thinkful-ei-narwhal.github.io/Quiz-Full-App-Nick-Isaac/",
        link1:
          "https://github.com/thinkful-ei-narwhal/Quiz-Full-App-Nick-Isaac",
        link2: "",
        description: "",
        techStack: "",
      },
    ],
  };

  plusSlide() {
    this.setState({ currentSlide: this.state.currentSlide + 1 });
  }

  minusSlide() {
    this.setState({ currentSlide: this.state.currentSlide - 1 });
  }

  mapImages() {
    return this.state.reel.map((reelObj, index) => {
      const slide =
        this.state.currentSlide === index ? "showSlide" : "mySlides";
      return (
        <div
          key={index}
          style={{
            backgroundColor: "black",
            backgroundImage: `url(${reelObj.imgUrl})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className={`${slide} fade container`}
        >
          <div className="numbertext ">
            {index + 1} / {this.state.reel.length}
          </div>
        </div>
      );
    });
  }

  mapDots() {
    return this.state.reel.map((reelObj, index) => {
      return (
        <span
          key={index}
          className="dot"
          onClick={() => this.setState({ currentSlide: index })}
        ></span>
      );
    });
  }

  renderOnLoad() {
    return (
      <>
        <h2>Projects</h2>
        <div className="slideshow-container">
          {this.mapImages()}
          {this.state.currentSlide === 0 ? null : (
            <a
              href="#0"
              className="prev game-carousel-button"
              onClick={() => this.minusSlide()}
            >
              &#10094;
            </a>
          )}
          {this.state.currentSlide === this.state.reel.length - 1 ? null : (
            <a
              href="#0"
              className="next game-carousel-button"
              onClick={() => this.plusSlide()}
            >
              &#10095;
            </a>
          )}
        </div>
        <br />
        <div className="style-align">{this.mapDots()}</div>
      </>
    );
  }

  render() {
    return <>{this.state.loaded ? this.renderOnLoad() : null}</>;
  }
}
