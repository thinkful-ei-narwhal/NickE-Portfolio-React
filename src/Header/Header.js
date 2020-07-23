import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Header.css";
import { faBars } from "@fortawesome/fontawesome-free-solid";

export default class Header extends Component {
  state = {
    showDropdown: false,
  };

  burgerListener = (event) => {
    event.preventDefault();
    this.setState({ showDropdown: !this.state.showDropdown });
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
                <AnchorLink
                  href="#anchor1"
                  offset="150"
                  className="menu-button"
                  aria-label="About Me page anchor"
                >
                  <p className="nav nav-text aboutme-color">About Me</p>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href="#anchor2"
                  offset="150"
                  className="menu-button"
                  aria-label="Portfolio page anchor"
                >
                  <p className="nav nav-text portfolio-color">Projects</p>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href="#anchor3"
                  offset="150"
                  className="menu-button"
                  aria-label="Contact page anchor"
                >
                  <p className="nav nav-text contact-color">Contact</p>
                </AnchorLink>
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
        {this.state.showDropdown ? (
          <div className="dropdown-content dropdown-pos">
            <div className="display-dropdown-content">
              <AnchorLink
                href="#anchor1"
                className="menu-button"
                offset="150"
                aria-label="About Me page anchor"
              >
                <p className="nav nav-text nav-drop aboutme-color">About Me</p>
              </AnchorLink>
              <AnchorLink
                href="#anchor2"
                className="menu-button"
                offset="150"
                aria-label="Portfolio page anchor"
              >
                <p className="nav nav-text nav-drop portfolio-color">
                  Projects
                </p>
              </AnchorLink>
              <AnchorLink
                href="#anchor3"
                className="menu-button"
                offset="150"
                aria-label="Contact page anchor"
              >
                <p className="nav nav-text nav-drop contact-color">Contact</p>
              </AnchorLink>
            </div>
          </div>
        ) : null}
      </nav>
    );
  }
}
