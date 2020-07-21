import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";
import "./Header.css";

export default class Header extends Component {
  state = {
    showDropdown: false,
  };

  burgerListener = (event) => {
    event.preventDefault();
    this.setState({showDropdown: !this.state.showDropdown})
    // $(".dropdown-content").toggle(".dropdown-content");
  };

  //doesn't strictly need anything, since it'll take you there anyway
  anchorListener = () => {
    //   event.preventDefault();
    //   $("html, body").animate(
    //     { scrollTop: $($(this).attr("href")).offset().top - 150 },
    //     800
    //   );
  };

  render() {
    return (
      <nav>
        <div className="nav-container">
          <div className="nav-header">
            <h1 className="name">Nicholas Evelson</h1>
          </div>
          <div className="nav-ul hidden-list">
            <ul>
              <li>
                <a
                  href="#anchor1"
                  className="menu-button"
                  onClick={(e) => this.anchorListener(e)}
                  aria-label="About Me page anchor"
                >
                  <p className="nav nav-text aboutme-color">About Me</p>
                </a>
              </li>
              <li>
                <a
                  href="#anchor2"
                  className="menu-button"
                  onClick={(e) => this.anchorListener(e)}
                  aria-label="Portfolio page anchor"
                >
                  <p className="nav nav-text portfolio-color">Projects</p>
                </a>
              </li>
              <li>
                <a
                  href="#anchor3"
                  className="menu-button"
                  onClick={(e) => this.anchorListener(e)}
                  aria-label="Contact page anchor"
                >
                  <p className="nav nav-text contact-color">Contact</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown hidden-burger">
            <button
              className="fas fa-bars burger-nav"
              onClick={(e) => this.burgerListener(e)}
              aria-label="Hamburger navigation dropdown button"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
        {this.state.showDropdown ? 
        <div className="dropdown-content dropdown-pos">
          <div className="display-dropdown-content">
            <a
              href="#anchor1"
              className="menu-button"
              onClick={(e) => this.anchorListener(e)}
              aria-label="About Me page anchor"
            >
              <p className="nav nav-text nav-drop aboutme-color">About Me</p>
            </a>
            <a
              href="#anchor2"
              className="menu-button"
              onClick={(e) => this.anchorListener(e)}
              aria-label="Portfolio page anchor"
            >
              <p className="nav nav-text nav-drop portfolio-color">Projects</p>
            </a>
            <a
              href="#anchor3"
              className="menu-button"
              onClick={(e) => this.anchorListener(e)}
              aria-label="Contact page anchor"
            >
              <p className="nav nav-text nav-drop contact-color">Contact</p>
            </a>
          </div>
        </div> : null}
      </nav>
    );
  }
}
