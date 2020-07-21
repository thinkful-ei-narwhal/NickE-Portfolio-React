import React, { Component } from "react";
import Header from "./Header/Header";
import Carousel from "./GameCarousel/GameCarousel";
import "./App.css";

export default class App extends Component {
  state = {
    hasError: false,
  };
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <main className="App__main">
          {this.state.hasError && (
            <p className="red">There was an error! Oh no!</p>
          )}
          <Carousel />
        </main>
      </div>
    );
  }
}
