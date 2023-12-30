import React from "react";
import createClass from "create-react-class";
import res from "./images/res.jpg";
import be from "./images/be.jpg";
import quiz from "./images/quiz.webp";
//using React.createclass method to create component
const About = createClass({
  render() {
    return (
      <div id="abou">
        <big>
          <center>
            <h1 id="story">OUR STORY</h1>
          </center>
        </big>
        <center>
          <img src={quiz} width="900" height="490" />
        </center>
        <big>
          <center>
            <h1 id="story">FOUNDERS OF REACT QUIZ</h1>
          </center>
        </big>
        <center>
          <table>
            <td>
              <figure>
                <img src={res} width="300" height="300" />
                <center>
                  <figcaption>RESHMA</figcaption>
                </center>
              </figure>
            </td>
           
          </table>
        </center>
        <br></br>
        <table>
          <tr>
            <td>
              <big>
                <h1>WHAT WE STAND FOR</h1>
              </big>
            </td>
            <td id="stand">
              <p>
                With the evolving technology, the traditional way of teaching
                student is really gone, and teachers find new methods of
                teaching, and helping students ace examinations having strong
                academic foundation.The various ways of learning might motivate
                the students desire for learning. Over decades of research shows
                that frequent non-graded and low stake quizzes are essential.
                Quizzing regularly helps in learning and long-term memory,
                leading to better performances in examinations. Our ReactQuiz
                website is for learning academic concepts in a fun way. The
                website makes learning fun by enabling students to challenge
                friends and peers, to learn together.
              </p>
            </td>
          </tr>
        </table>
        <br></br>
      </div>
    );
  },
});

export default About;
