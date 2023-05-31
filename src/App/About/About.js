import React from "react";
import "./about.css";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML_skill", content: "HTML", porcentage: "65%", value: "65" },
        { id: "CSS3_skill", content: "CSS", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "65%",
          value: "65",
        },
        {
          id: "ReactJS_skill",
          content: "React",
          porcentage: "70%",
          value: "70",
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "85%",
          value: "85",
        },
        {
          id: "R_Studio",
          content: "Rstudio",
          porcentage: "85%",
          value: "85",
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hola! Soy María Isabel Montoya Valladares. Soy estudiante de quinto año de la carrera en Ingeniería en bioinformática. Tengo 22 años y soy una chica muy entusiasta, trabajadora y dedicada. En el lado personal me gusta mucho escuchar música, bailar, pintar, moverme y tener más cosas que hacer que solo quedarme quieta",
        },
        {
          id: "second-p-about",
          content:
            "L non id tempor. Amet adipisicing occaecat tempor culpa quis est duis.",
        },
        {
          id: "third-p-about",
          content:
            "L non id tempor. Amet adipisicing occaecat tempor culpa quis est duis.",
        },
      ],
    };
  }

  render() {
    return React.createElement(
      "section",
      { id: "about", className: "about-mf sect-pt4 route" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-sm-12" },
            React.createElement(
              "div",
              { className: "box-shadow-full" },
              React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                  "div",
                  { className: "col-md-6" },
                  React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                      "div",
                      {
                        className: "col-sm-6 col-md-5",
                        style: { margin: "0 auto" },
                      },
                      React.createElement(
                        "div",
                        {
                          className: "about-img",
                          style: { textAlign: "center" },
                        },
                        React.createElement("img", {
                          className: "img-fluid rounded b-shadow-a",
                          alt: "",
                        })
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "skill-mf" },
                    this.state.skills.map((skill) => {
                      return React.createElement(
                        React.Fragment,
                        { key: skill.id },
                        React.createElement("span", null, skill.content),
                        " ",
                        React.createElement(
                          "span",
                          { className: "pull-right" },
                          skill.porcentage
                        ),
                        React.createElement(
                          "div",
                          { className: "progress" },
                          React.createElement("div", {
                            className: "progress-bar",
                            role: "progressbar",
                            style: { width: skill.porcentage },
                            "aria-valuenow": skill.value,
                            "aria-valuemin": "0",
                            "aria-valuemax": "100",
                          })
                        )
                      );
                    })
                  )
                ),
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">Acerca de Mi</h5>
                    </div>
                  </div>
                  {this.state.about_me.map((content) => {
                    return React.createElement(
                      "p",
                      { className: "lead", key: content.id },
                      content.content
                    );
                  })}
                </div>
              )
            )
          )
        )
      )
    );
  }
}

export default About;
