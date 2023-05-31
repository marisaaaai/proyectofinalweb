import React from "react";
import "./navbar.css";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      isNavbarReduced: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { isNavbarReduced } = this.state;
    if (window.pageYOffset > 50 && !isNavbarReduced) {
      this.setState({ isNavbarReduced: true });
    } else if (window.pageYOffset <= 50 && isNavbarReduced) {
      this.setState({ isNavbarReduced: false });
    }
  };

  scrollToSection = (event, sectionId) => {
    event.preventDefault();
    console.log(sectionId);
    const section = document.getElementById(sectionId);
    console.log(section);
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const offset = section.offsetTop - navbarHeight + 5;
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };

  render() {
    const { logo, isNavbarReduced } = this.state;

    return React.createElement(
      "nav",
      {
        className: `navbar navbar-b ${
          isNavbarReduced ? "navbar-reduce" : "navbar-trans"
        } navbar-expand-md fixed-top`,
        id: "mainNav",
      },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "button",
          {
            className: "navbar-toggler collapsed",
            type: "button",
            "data-toggle": "collapse",
            "data-target": "#navbarDefault",
            "aria-controls": "navbarDefault",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation",
          },
          React.createElement("span", null),
          React.createElement("span", null),
          React.createElement("span", null)
        ),
        React.createElement(
          "div",
          {
            className: "navbar-collapse collapse justify-content-end",
            id: "navbarDefault",
          },
          React.createElement(
            "ul",
            { className: "navbar-nav" },
            React.createElement(
              "li",
              { className: "nav-item" },
              React.createElement(
                "a",
                {
                  className: "nav-link js-scroll active",
                  href: "#home",
                  onClick: (event) => this.scrollToSection(event, "home"),
                },
                "Home"
              )
            ),
            React.createElement(
              "li",
              { className: "nav-item" },
              React.createElement(
                "a",
                {
                  className: "nav-link js-scroll",
                  href: "#about",
                  onClick: (event) => this.scrollToSection(event, "about"),
                },
                "Acerca de Mi"
              )
            ),
            React.createElement(
              "li",
              { className: "nav-item" },
              React.createElement(
                "a",
                {
                  className: "nav-link js-scroll",
                  href: "#work",
                  onClick: (event) => this.scrollToSection(event, "work"),
                },
                "Proyectos"
              )
            )
          )
        )
      )
    );
  }
}
export default Navbar;
