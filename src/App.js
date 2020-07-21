import React, { Component } from "react";
import Header from "./Header/Header";
import Carousel from "./GameCarousel/GameCarousel";
import Footer from "./Footer/Footer";
import "./App.css";
import AboutMe from "./AboutMe/AboutMe";
import Headline from "./Headline/Headline";

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
          <Headline />
          {this.state.hasError && (
            <p className="red">There was an error! Oh no!</p>
          )}
          <AboutMe />
          <Carousel />
          <Footer />
        </main>
      </div>
    );
  }
}
