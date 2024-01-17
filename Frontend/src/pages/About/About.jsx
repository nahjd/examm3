import React from "react";
import "./About.scss";
const About = () => {
  return (
    <>
      <section>
        <div className="about">
          <div className="leftabout">
            <img src="./../../../public/images/about-2.jpg" alt="" />
          </div>
          <div className="rightabout">
            <h4>ABOUT TASTY</h4>
            <h1>
              Our chef cooks the most <br /> delicious food for you
            </h1>{" "}
            <br />
            <span>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. <br /> <br /> A small river named Duden
              flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts
              of sentences fly into your mouth.
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
