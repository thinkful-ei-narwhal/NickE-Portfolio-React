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
import { faDatabase } from "@fortawesome/fontawesome-free-solid";
import "./GameCarousel.css";

const objMapper = {
  html: faHtml5,
  js: faJs,
  node: faNodeJs,
  react: faReact,
  css: faCss3,
  unity: faUnity,
  npm: faNpm,
  postgreSQL: faDatabase
};

export default class GamesCarousel extends Component {
  state = {
    // currentSlide: 0,
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
          "Project Blackburn is a typing game that lets users pick their own difficulty and progress through a choice of three different story campaigns.  The application also tracks metrics about your typing progress and posts your scores to the leaderboards so you can compete with people across the world.  My team and I made this app because we love typing games and recognize that most don't provide enough diversity in their gameplay.  The app is perfect for anyone who wants to play games and improve their typing speeds.",
        techStack: "js node react css npm postgreSQL",
      },
      {
        imgUrl: "https://i.imgur.com/Gu9IOvZ.png",
        title: "VGFinder",
        site: "https://vgfinder.now.sh/",
        link1: "https://github.com/thinkful-ei-narwhal/vgfinder-client-nicke",
        link2:
          "https://github.com/thinkful-ei-narwhal/vgfinder-server-capstone-nicke",
        description:
          "VGFinder is an application that lets users discover new indie video games and help other find hidden gems.  The app recommends games you, lets you wishlist your favorites, and helps you search for your new favorite game.  You can also contribute your favorite title if it isn't listed.  I built this application because it's tough for indie games to compete with the marketing budget of triple A titles.  My hope is that this helps solo and small developement teams find a devoted fanbase to support their titles.  This app is perfect for anyone who likes indie games and is looking to find their next favorite title.",
        techStack: "js node react css npm postgreSQL",
      },
      {
        imgUrl: "https://i.imgur.com/lfpMic5.jpg",
        title: "RuneFinder",
        site: "https://thenevel.itch.io/runefinder",
        link1: "",
        link2: "",
        description:
          "RuneFinder is a video game that I built with the Unity Engine, C#.  The application is a demo level that show cases the game's powerup system and shooting mechanics.  Shoot your way from room to room, unlocking powerups and getting strong enough to beat the level's boss.  Players can shoot, reload, heal, teleport, uncover secret rooms, find new weapons, and use active abilities to defeat their enemies.  I built this game for myself to learn how to use the engine and pay homage to one of my favorite games of all time! This game is perfect for anyone that wants to test there skills in an arena shooter.",
        techStack: "unity",
      },
      {
        imgUrl: "https://i.imgur.com/t3CJpMe.png",
        title: "Petful",
        site: "https://petful-wheat.vercel.app/adoption",
        link1: "https://github.com/thinkful-ei-narwhal/DSA-Client-Nick-Andrew",
        link2:
          "https://github.com/thinkful-ei-narwhal/DSA-Petful-Server-Nick-Andrew",
        description:
          "Petful is an application that lets users adopt a pet.  The app lets you add your name to the adoption queue.  Other people are always adopting, and you can see what pets they chose.  When it's your turn, you can decide to adopt a cat or dog that has been queued up for you.  I built this app to promote animal adoption.  This app is perfect for anyone that likes to look at cute animal pictures",
        techStack: "js node react css npm postgreSQL",
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
          "Spaced Repetition is an application that teaches users how to speak a new language by helping them memorize words and phrases.  This app quizzes you on common phrases and keeps track of which phrases you need more practice with.  I built this app because I'm Russian and still struggle with certain idioms from time to time.  My hope is that this app will help you practice your native language or learn a new one.  This app is perfect for anyone that wants to learn Spanish.",
        techStack: "js node react css npm postgreSQL",
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
          "Space quiz lets you take a quiz about the cosmos and the history of its scientific examination. It is made for anyone who considers themselves aspiring astronomers and wants to test their knowledge of the final frontier. I built this app to challenge my dad, who has watched way too much Star Trek to not get the answers rights. The app lets you answer multiple- choice questions about space, provides feedback after every answer, calculates your score at the end of the quiz, and lets your retake the quiz.",
        techStack: "js html css npm",
      },
    ],
  };

  renderOnLoad() {
    return (
      <section className="portfolio" id="anchor2">
        <h2 className="portfolio-color">Projects</h2>
        <div className="slideshow-container">{this.mapProjects()}</div>
      </section>
    );
  }

  mapProjects() {
    return this.state.reel.map((projectCount, index) => {
      return (
        <div className="project">
          <h3 className="project-title"> {projectCount.title}</h3>
          <a
            href={projectCount.site}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div
              key={index}
              style={{
                backgroundColor: "black",
                backgroundImage: `url(${projectCount.imgUrl})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className={`${index} fade container`}
            >
              <div className="numbertext ">
                {index + 1} / {this.state.reel.length}
              </div>
            </div>
          </a>
          <div className="tech-stack">
            {projectCount.techStack.split(" ").map((tech, index) => {
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
                  <i key={index} className="p-text">
                    {tech}
                  </i>
                );
              }
            })}
          </div>
          <div className="project-description">
            <p className="p-text">{projectCount.description}</p>
          </div>
          <div className="project-links">
            <a
              className="button-link"
              href={projectCount.site}
              rel="noopener noreferrer"
              target="_blank"
            >
              {projectCount.title} Live Page
            </a>

            {projectCount.link1 !== "" && (
              <a
                className="button-link"
                href={projectCount.link1}
                rel="noopener noreferrer"
                target="_blank"
              >
                {projectCount.title} Repo Client
              </a>
            )}

            {projectCount.link2 !== "" && (
              <a
                className="button-link"
                href={projectCount.link2}
                rel="noopener noreferrer"
                target="_blank"
              >
                {projectCount.title} Repo Api
              </a>
            )}
          </div>
        </div>
      );
    });
  }

  render() {
    return <>{this.state.loaded ? this.renderOnLoad() : null}</>;
  }
}
