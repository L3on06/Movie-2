import React from "react";
import { Link } from "react-router-dom"
import '../Assets/Styles/Global.css';
import '../Assets/Styles/Components.css';

function Nav() {
  return (
    <nav className="">
      <div className="nav container flex">
        <div className="flex p50-RL">
          <h3><Link className="logo primary-color xmd-text" to="/">Free Movies</Link></h3>
          <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_cbrbre30.json"
            background="transparent" speed="0.8" style={{ width: "90px", height: "90px" }} autoplay>
          </lottie-player>
        </div>
        <div className="nav-menu">
          <ul className="nav-item flex p50-RL">
            <li><Link className="nav-link primary-color xmd-text" to="/">Home</Link></li>
            <li><Link className="nav-link primary-color xmd-text" to="/products">Products</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
