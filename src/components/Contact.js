import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
export default function Contact() {
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [Feedback, setFeedback] = useState("");
  const postData = () => {
    axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
      UserName,
      Email,
      PhoneNo,
      Feedback,
    });

    {
      if (
        document.getElementById("uname").checkValidity() &&
        document.getElementById("email").checkValidity() &&
        document.getElementById("ph").checkValidity() &&
        document.getElementById("feed").checkValidity()
      ) {
        alert("Thank you for your Response, " + UserName);
        document.getElementById("uname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("ph").value = "";
        document.getElementById("feed").value = "";
      }
    }
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>USERNAME</label>
          <br />
          <input
            type="text"
            id="uname"
            placeholder="Enter user name"
            onChange={(e) => setUserName(e.target.value)}
            required
            pattern="[A-Za-z]{3,}"
          />
        </Form.Field>
        <Form.Field>
          <label id="email1">EMAIL ID</label>
          <br />
          <input
            type="email"
            id="email"
            placeholder="Enter Email id"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Field>
        <Form.Field>
          <label id="ph1">PHONE NUMBER</label>
          <br />
          <input
            placeholder="Enter Phone Number"
            id="ph"
            onChange={(e) => setPhoneNo(e.target.value)}
            required
            pattern="[0-9]{10}"
          />
        </Form.Field>
        <Form.Field>
          <label>FEEDBACK</label>
          <br />
          <textarea
            id="feed"
            placeholder="Enter Feedback"
            onChange={(e) => setFeedback(e.target.value)}
            required
            maxLength="50"
          />
        </Form.Field>
        <Button onClick={postData} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
