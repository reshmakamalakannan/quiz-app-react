import React from "react";
import { Link } from "react-router-dom";
//Logo is a stateless functional component
const Logo = () => (
  <div className="container">
    <span className="react-logo">
      <span className="nucleo"></span>
    </span>
  </div>
);

//Creating a factory for the component Logo and calling it as function
const logo = React.createFactory(Logo);

//stateless functional component with props
const Banner = ({ title }) => (
  <h1>
    <center>
      <h1 className="blink">{title}</h1>
    </center>
  </h1>
);
//custom property validation
Banner.propTypes = {
  title: (props, propName) =>
    typeof props[propName] !== "string"
      ? new Error("A title must be a string")
      : props[propName].length > 30
      ? new Error(`title is over 30 characters`)
      : null,
};
const Header = () => (
  <div>
    <div className="logban">
      {logo()}
      <Banner title="Welcome to React Quiz Website" />
      <br />
    </div>
    <br />
    <nav className="navpage">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/about" className="link">
        About
      </Link>
      <Link to="/quiz" className="link">
        Quizzes
      </Link>
      <Link to="/contact" className="link">
        Contact
      </Link>
    </nav>
  </div>
);
export default Header;
