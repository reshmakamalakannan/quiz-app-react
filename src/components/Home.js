import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.jpg";
//array of objects
const images = [
  {
    url: image1,
  },
  {
    url: image2,
  },
  {
    url: image3,
  },
  {
    url: image4,
  },
];
const Pictures = () => {
  return (
    <div>
      <center>
        <SimpleImageSlider
          width={1150}
          height={650}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
        />
      </center>
    </div>
  );
};
const Textpart = () => (
  <div id="main">
    <center>
      <article>
        <big>
          {React.createElement(
            "h1",
            {
              "font-size": 7,
            },
            "React Quiz Website - A World of Quizzes"
          )}
        </big>
        <p id="info">
          Our React Quiz Website helps the student to learn with practice, as it
          allows the students to think back to the information previously
          learned and remember them while quizzing.With practicing quizzes,
          students can do critical thinking, and get into a habit of innovative
          learning. ReactQuiz is a smart quiz website for learning academic
          concepts in a fun way. The website makes learning fun by enabling
          students to challenge friends and peers, to learn together.
        </p>
      </article>
    </center>
  </div>
);
const Home = () => (
  <div className="home">
    <br />
    <Textpart />
    <Pictures />
    <br />
  </div>
);
export default Home;
