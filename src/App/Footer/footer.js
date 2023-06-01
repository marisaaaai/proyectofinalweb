import "./footer.css";
import "../Home/portada.css"
import { MdOutlineFacebook } from "react-icons/md";
import { ImSpotify, ImLinkedin } from "react-icons/im";
import { TfiTwitterAlt, TfiInstagram, } from "react-icons/tfi";


function footer(){

    return(
        <div class="containerFoot background intro route bg-image" id="footer"
        style={{
          backgroundImage: `url(https://media0.giphy.com/media/sJvz8Qnfly3BOuotGx/200w.gif?cid=6c09b952cjlbji5ejrxakkkyxje945fjkrci1b3ah1hk5ebj&ep=v1_gifs_search&rid=200w.gif&ct=g)`,
        }}>
          {/* <button className="support">
            kjlkjlkjlkj
          </button> */}
          <div class="topbarbaj">
            <ul class="nav-listicons">
              <li><a href="https://www.facebook.com"><MdOutlineFacebook size={35}/> </a></li>
              <li><a href="https://www.twitter.com"><TfiTwitterAlt size={35}/></a></li>
              <li><a href="https://www.instagram.com"><TfiInstagram size={35}/></a></li>
              <li><a href="https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu?si=e6d5eb7a33b04c4a"><ImSpotify size={35}/></a></li>
              <li><a href="https://www.linkedin.com/in/marisa-montoya-2094a1262"><ImLinkedin size={35}/></a></li>
            </ul>
          </div>
          <div class="botbarbaj">
            <ul class="nav-list">
              <li className="lead"><a href="#home">Back to Top</a></li>
            </ul>
          </div>
			</div>
    )
}

export default footer;