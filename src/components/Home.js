import React from 'react';
import "../scss/home.scss";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="container">
        <h1 className="headline">
          Entropy
        </h1>
        <div className="headline-description">
          <div className="separator">
            <div className="disk"><img src="/disk.png" /></div>
          </div>
          <div className="signle-animation">
            <h5>Music Plugins</h5>
            <a className="btn">Explore</a>
          </div>
        </div>
      </div>
    </section>)
}
