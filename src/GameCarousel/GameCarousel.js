import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faUnity,
  faJs,
  faNodeJs,
  faReact,
  faCss3,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";
import "./GameCarousel.css";

const objMapper = {
  html: faHtml5,
  js: faJs,
  node: faNodeJs,
  react: faReact,
  css: faCss3,
  unity: faUnity,
  npm: faNpm,
};

export default class GamesCarousel extends Component {
  state = {
    currentSlide: 0,
    loaded: true,
    reel: [
      {
        imgUrl: "https://i.imgur.com/PLCJ62s.png",
        title: "Project Blackburn",
        site: "https://project-blackburn-client.vercel.app/",
        link1:
          "https://github.com/thinkful-ei-narwhal/project-blackburn-client",
        link2:
          "https://github.com/thinkful-ei-narwhal/project-blackburn-server",
        description:
          "Project Blackburn is a typing game that lets users pick their own difficulty and progress through a choice of three different story campaigns.  Pass or fail, at the end of each run the application tracks metrics about your progress as a typer and posts them to our online leaderboards so you can compete or show off to your friends.  My team and I made this app because we love typing games but recognize that they don't provide enough diversity in their gameplay to keep them interesting and a player's typing speeds sharp.  The app is perfect for anyone who wants to play games and improve their typing speeds.",
        techStack: "js node react css npm PostgreSQL Express",
      },
      {
        imgUrl: "https://i.imgur.com/Gu9IOvZ.png",
        title: "VGFinder",
        site: "https://vgfinder.now.sh/",
        link1: "https://github.com/thinkful-ei-narwhal/vgfinder-client-nicke",
        link2:
          "https://github.com/thinkful-ei-narwhal/vgfinder-server-capstone-nicke",
        description:
          "VGFinder is an application that helps users discover and contribute their favorite indie games.  The app recommends games to users, lets them wishlist their favorites, and helps them search for the next hidden gem to add to their collections.  Users can also contribute titles that they didn't find in the database.  I built this application because it is tough for indie games to compete with the marketing budget of triple A titles.  My hope is that this helps solo and upstart developers find a devoted following that supports their titles.  This app is perfect for anyone who likes indie games and is looking to find their new favorite title.",
        techStack: "js node react css npm PostgreSQL Express",
      },
      {
        imgUrl: "https://i.imgur.com/lfpMic5.jpg",
        title: "RuneFinder",
        site: "https://thenevel.itch.io/runefinder",
        link1: "",
        link2: "",
        description:
          "RuneFinder is a video game that I built with the Unity Engine.  The application is a demo level that show cases the game's powerup system and shooting mechanics.  Shoot your way from room to room, unlocking powerups and getting strong enough to beat the level's boss.  Players can shoot, reload, heal, teleport, uncover secret rooms, find new weapons, and use active abilities to defeat their enemies.  I built this game for myself to learn how to use the engine and pay homage to one of my favorite games of all time! This game is perfect for anyone that wants to test there skills in an arena shooter.",
        techStack: "unity C#",
      },
      {
        imgUrl: "https://i.imgur.com/t3CJpMe.png",
        title: "Petful",
        site: "https://petful-wheat.vercel.app/adoption",
        link1: "https://github.com/thinkful-ei-narwhal/DSA-Client-Nick-Andrew",
        link2:
          "https://github.com/thinkful-ei-narwhal/DSA-Petful-Server-Nick-Andrew",
        description:
          "Petful is an application that lets users adopt a pet.  The app lets you log in and add your name to the adoption queue.  Other people are always adopting, and you can see what pets they choose.  When it's your turn, you can decide to adopt a cat or dog that has been queued up for you.  I built this app to promote animal adoption.  This app is perfect for anyone that likes to look at cute animal pictures",
        techStack: "js node react css npm PostgreSQL Express",
      },
      {
        imgUrl: "https://i.imgur.com/AbQNQ86.png",
        title: "Spaced Repetition",
        site: "https://spaced-repetition-eta.vercel.app/",
        link1:
          "https://github.com/thinkful-ei-narwhal/spaced-repetition-client-andrew-nick",
        link2:
          "https://github.com/thinkful-ei-narwhal/spaced-repetition-api-andrew-nick",
        description:
          "Spaced Repetition is an application that teaches users how to speak a new language by helping them memorize words and phrases.  This app tests users on the words and phrases and keeps track of which phrases they need more practice with.  I built this app because I'm Russian and still struggle with the language when I don't speak it for a long time.  My hope is that this app will help other users learn of practice a new language.  This app is perfect for anyone that wants to learn Spanish.",
        techStack: "js node react css npm PostgreSQL Express",
      },
      {
        imgUrl: "https://i.imgur.com/AOlX6VF.png",
        title: "Bookmarks",
        site: "https://thinkful-ei-narwhal.github.io/NickE-bookmarks-app/",
        link1: "https://github.com/thinkful-ei-narwhal/NickE-bookmarks-app",
        link2: "",
        description:
          "Bookmark lets you store a list of all the books you’ve read in one place. It allows you to rate your entries, write descriptions of the novels, and filter for your top rated reads. I made this app to keep track of all the audiobooks I've read over the years (Yes, listening to audiobooks still counts as reading).The app is perfect for anyone who considers themselves a book worm and wants to compile all of their favorite bodies of work in one place.",
        techStack: "js html css npm",
      },
      {
        imgUrl: "https://i.imgur.com/dqsvBWb.png",
        title: "Space Quiz",
        site: "https://thinkful-ei-narwhal.github.io/Quiz-Full-App-Nick-Isaac/",
        link1:
          "https://github.com/thinkful-ei-narwhal/Quiz-Full-App-Nick-Isaac",
        link2: "",
        description:
          "Space quiz lets you take a quiz about the cosmos and the history of its scientific examination. It is made for anyone who considers themselves aspiring astronomers and wants to test their knowledge of the final frontier. I built this app to challenge my dad, who has watched way too much Star Trek to not get the answers rights.<br>The app lets you answer multiple- choice questions about space, provides feedback after every answer, calculates your score at the end of the quiz, and lets your retake the quiz.",
        techStack: "js html css npm",
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
        <section className="portfolio" id="anchor2">
          <h2 className="portfolio-color">Projects</h2>
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

          <div className="project">
            <h3 className="project-title">
              {this.state.reel[this.state.currentSlide].title}
            </h3>
            <div className="tech-stack">
              {this.state.reel[this.state.currentSlide].techStack
                .split(" ")
                .map((tech, index) => {
                  if (objMapper[tech]) {
                    return (
                      <FontAwesomeIcon
                        key={index}
                        className="fab fa-js font-awesome tech-padding"
                        icon={objMapper[tech]}
                      />
                    );
                  } else {
                    return (
                      <p
                        key={index}
                        className="p-text"
                      >
                        {tech}
                      </p>
                    );
                  }
                })}
            </div>
            <div className="project-description">
              <p className="p-text">
                {this.state.reel[this.state.currentSlide].description}
              </p>
            </div>
            <div className="project-links">
              <a
                className="button-link"
                href={this.state.reel[this.state.currentSlide].site}
                rel="noopener noreferrer"
                target="_blank"
              >
                {this.state.reel[this.state.currentSlide].title} Live Page
              </a>

              {this.state.reel[this.state.currentSlide].link1 !== "" && (
                <a
                  className="button-link"
                  href={this.state.reel[this.state.currentSlide].link1}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {this.state.reel[this.state.currentSlide].title} Repo Client
                </a>
              )}

              {this.state.reel[this.state.currentSlide].link2 !== "" && (
                <a
                  className="button-link"
                  href={this.state.reel[this.state.currentSlide].link2}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {this.state.reel[this.state.currentSlide].title} Repo Api
                </a>
              )}
            </div>
          </div>
        </section>
      </>
    );
  }

  render() {
    return <>{this.state.loaded ? this.renderOnLoad() : null}</>;
  }
}
