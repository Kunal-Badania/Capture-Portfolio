import React from "react";
import home1 from "../img/home1.png";
import { Link } from "react-router-dom";
import { Description, Hide } from "../styles";
// Animation

const AboutSection = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "4rem",
      }}
    >
      <Description style={{ zIndex: 2 }}>
        <header initial="hidden" className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>
              <span>true.</span>
            </h2>
          </Hide>
        </header>

        <p>
          Grab the opportunity to capture memories that you will treasure for a
          lifetime. Why be ordinary when you can be extraordinary?
        </p>

        <Link className="non-styled-link" to="/contact">
          <button>Contact Us</button>
        </Link>
      </Description>

      <img
        initial="hidden"
        animate="show"
        src={home1}
        alt="guy with a camera"
      />
    </div>
  );
};

export default AboutSection;
