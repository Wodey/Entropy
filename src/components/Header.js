import React, {useState} from 'react';
import "../scss/header.scss";
import {GoThreeBars, GoX} from 'react-icons/go';

export default function Header() {
  const [isOpened, open] = useState(false);
  return (
    <header>
      <div className="container">
        <nav className="nav">
            <a className="logo">
              <img src="logo.jpeg" />
            </a>
            <div className="toggler">
              <GoThreeBars size="3rem" className="toggler-open" onClick={() => open(true)}/>
            </div>
            <ul className={`nav-list ${isOpened ? "active" : ""}`}>
              <li className="nav-item"><a className="nav-link" onClick={() => open(false)} href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" onClick={() => open(false)} href="#show">#Show</a></li>
              <li className="nav-item"><a className="nav-link" onClick={() => open(false)} href="#features">Features</a></li>
              <li className="nav-item"><a className="nav-link" onClick={() => open(false)} href="#pricing">Pricing</a></li>
              <li className="nav-item"><a className="nav-link" onClick={() => open(false)} href="#download">Download</a></li>
              <li className="nav-item"><a className="nav-link" onClick={() => open(false)} href="#support">Support</a></li>
              <GoX size="3rem" className="toggler-close" onClick={() => open(false)} />
            </ul>
        </nav>
      </div>
    </header>
  )
};
