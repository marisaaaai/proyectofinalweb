import React from "react";
import "./portada.css";

class Portada extends React.Component {
  render() {
    return (
      <div
        id="home"
        className="intro route bg-image "
        style={{
          backgroundImage: `url(https://media0.giphy.com/media/sJvz8Qnfly3BOuotGx/200w.gif?cid=6c09b952cjlbji5ejrxakkkyxje945fjkrci1b3ah1hk5ebj&ep=v1_gifs_search&rid=200w.gif&ct=g)`,
        }}
      >
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Bienvenidoooooos!!!</h1>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  Ver mis Proyectos
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portada;
