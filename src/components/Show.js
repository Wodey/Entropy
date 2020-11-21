import React from 'react';
import "../scss/show.scss";

export default function Show() {
  return (
    <section className="show" id="show">
      <div className="container">
        <div>
          <h1 className="headline">
            #Show
          </h1>
          <div className="signle-animation">
            <h5>Video Tour</h5>
          </div>
        </div>
        <div className="video">
          <video controls >
            <source src="/show.mp4" />
          </video>
        </div>
        <div className="btns">
          <a className="btn s-btn">More videos</a>
          <a className="btn v-btn">Youtube</a>
        </div>
      </div>
    </section>
  )
}
