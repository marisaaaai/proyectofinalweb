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
        {
          id: "Ingles",
          content: "Ingles",
          porcentage: "90%",
          value: "90",
        },
        {
          id: "español",
          content: "Español",
          porcentage: "90%",
          value: "90",
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hola! Soy María Isabel Montoya Valladares. Soy estudiante de quinto año de la carrera en Ingeniería en bioinformática. Tengo 22 años y soy una chica muy entusiasta, trabajadora y dedicada. En el lado personal me gusta mucho escuchar música, bailar, pintar, moverme y tener más cosas que hacer para no tener una vida sedentaria.",
        },
      ],
    };
  }

  render() {
    return React.createElement(
      "section",
      { id: "about", className: "about-mf sect-pt4 route",
      } ,
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
                        ),
                        
                      );

                    }),
                    <p className="lead">
                          <b>
                            Cursos Extra
                          </b>
                          <ul>
                            <li>TOEFL Preparation <br/> Academia Europea <br/> 2018 - 2018</li>
                            <li> Learning How to Learn: Powerful Mental tools to help you master through subjects <br/> UC San Diego <br/> 2020 </li>
                            <li> Biology Meets Programming: Bioinformatics for Beginners <br/> UC San Diego <br/> 2020</li>

                          </ul>
                    </p>
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
                  <p className="lead">
                    <b>
                      Educación
                    </b><br/>
                    <ul>
                      <li> Universidad del Valle de Guatemala <br/> Ingenieria en bioinformática <br/> 2019-2023</li>
                      <li> Colegio Suizo Americano <br/> Bachillerato <br/> 2017-2018</li>
                      <li> Colegio Bilingue Campo Real <br/> Educación basica <br/> 2004 - 2016 </li>
                    </ul>
                  </p>
                  <p className="lead">
                    <b>
                      Contacto
                    </b>
                    <br />
                    <i> Correo: </i> mon19169@yvg.edu.gt
                    <br />
                    <i> Telefono: </i> (502) 1234-5678
                  </p>
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
