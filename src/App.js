import React, { Component } from "react";
import Header from "./Header/Header";
import Carousel from "./GameCarousel/GameCarousel";
import Footer from "./Footer/Footer";
import "./App.css";
import AboutMe from "./AboutMe/AboutMe";
import Headline from "./Headline/Headline";
import { faHtml5, faJs, faNodeJs, faReact, faCss3, faUnity, faNpm } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


library.add(faHtml5, faJs,faNodeJs,faReact,faCss3,faUnity, faNpm);

export default class App extends Component {
  state = {
    hasError: false,
  };
  render() {
    return (
      <div className="App">
        <main className="App__main">
          <header className="App__header">
            <Header />
          </header>
          {this.state.hasError && (
            <p className="red">There was an error! Oh no!</p>
          )}
          <section className="content">
            <Headline />
            <AboutMe />
            <Carousel />
          </section>
          <Footer />
        </main>
      </div>
    );
  }
}
