import React, { Fragment } from "react";
import ChatLogin from "../ChatLogin/ChatLogin";
import Header from "../../shared/components/Header";
import "./chat.css";

function Chat() {
  return (
    <Fragment>
      <Header />
      <ChatLogin />
    </Fragment>
  );
}

export default Chat;
