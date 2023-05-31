import React from "react";
import "./proyectos.css";

import stock from "../imgs/lab4.png";
import stock1 from "../imgs/lab5.png";
import stock2 from "../imgs/lab6.png";
import stock3 from "../imgs/lab7.png";
import stock4 from "../imgs/lab8.png";
import stock5 from "../imgs/lab9.png";
import stock6 from "../imgs/lab10.png";

class Proyectos extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Proyectos y Laboratorios</h3>
                <p className="subtitle-a">
                  Proyectos realizados para la clase de Sistemas y Tecnologias
                  Web. En donde se aplicaron software HTML, CSS, React y
                  conceptos como componentes para la realización de la solución.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://lab4css.web.app">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Un solo CSS</h2>
                        <div className="w-more">
                          <span className="w-ctegory">HTML CSS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://lab5html.web.app">
                  <div className="work-img">
                    <img src={stock1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">API </h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            JavaScript Node JS API
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://lab6html-5368d.web.app">
                  <div className="work-img">
                    <img src={stock2} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Componentes </h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            JavaScript CSS HTML Componentes
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://lab7webpack.web.app">
                  <div className="work-img">
                    <img src={stock3} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Webpack & babel </h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Bootstrap Webpack Babel
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://lab8-90d39.web.app">
                  <div className="work-img">
                    <img src={stock4} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Juego de Memoria</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            JavaScript Webpack Babel React
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://calculadora-2fa44.web.app">
                  <div className="work-img">
                    <img src={stock5} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Calculadora</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            CSS Webpack Babel React
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://proyecto1web-ac595.web.app/">
                  <div className="work-img">
                    <img src={stock6} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Pagina The Killers </h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            JavaScript React CSS Webpack Babel
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Proyectos;
