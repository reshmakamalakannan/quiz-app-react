import React from "react";
//ES6 CLASS COMPONENT
export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="box-container">
            <div className="box">
              <h3>Contact Info</h3>
              <p>
                <i className="fas fa-map-marker-alt"> </i>Chennai-600020,India
              </p>
              <p>
                <i className="fas fa-envelope"> </i>reactquiz@gmail.com
              </p>
              <p>
                <i className="fas fa-phone"> </i>+000-000-000
              </p>
            </div>
            <div className="box">
              <h3>Branch Location</h3>
              <a href="#">India</a>
              <a href="#">USA</a>
              <a href="#">France</a>
              <a href="#">Russia</a>
            </div>
            <div className="box">
              <h3>Quick Links </h3>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Quizzes</a>
              <a href="#">Contact</a>
            </div>
            <div className="box">
              <h3>Follow Us</h3>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Linkedin</a>
            </div>
          </div>
          <h1 className="credit">
            © Copyright 2022 - ReactQuiz. All Rights Reserved.
          </h1>
        </div>
      </div>
    );
  }
}
