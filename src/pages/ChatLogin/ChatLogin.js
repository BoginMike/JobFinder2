import React, { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { getApiCall } from "../../shared/api-utils";
import { Button, TextField } from "@mui/material";

export default function ChatLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function chatlogin() {
    // do api call
    // if we got token in response
    // navigate to Home page
    getApiCall("/users/generate-token", {
      username: username,
      password: password,
    }).then((response) => {
      // response is json response sent from the server
      if (response.token) {
        // username and passord is correct and token is generated successfully.
        localStorage.setItem("token", response.token);
        //navigate user to Home page
        navigate("/startchat");
      } else {
        // something went wrong
        localStorage.setItem("token", "");
        alert("Username or password is incorrct!");
      }
    });
  }
  sessionStorage.setItem("username", username);
  return (
    <Fragment>
      <h2>
        To let us know who we will be chatting with
        <br />
        please signup or login below.
      </h2>
      <div className="login-page">
        <div className="login-container">
          <TextField
            value={username}
            onChange={(x) => setUsername(x.target.value)}
            type="text"
            placeholder="Username"
          />
          <TextField
            value={password}
            onChange={(x) => setPassword(x.target.value)}
            type="password"
            placeholder="Password"
          />
          <Button onClick={chatlogin}>Log in</Button>
          <a href="/signon-chat"> Create Account</a>
        </div>
      </div>
    </Fragment>
  );
}
