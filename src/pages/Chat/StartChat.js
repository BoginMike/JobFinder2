import React, { useState, Fragment, useContext } from "react";
import { useForm } from "react-hook-form";
import user from "../ChatLogin/ChatLogin";
import Header from "../../shared/components/Header";
import { postApiCall } from "../../shared/api-utils";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import "./chat.css";

export default function StartChat() {
  const navigate = useNavigate();
  console.log("i am here");
  // Chat box
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // document.querySelector(".openChatBtn").addEventListener("click", openForm);
  // document.querySelector(".close").addEventListener("click", closeForm);
  function openForm() {
    document.querySelector(".openChat").style.display = "block";
  }
  function closeForm() {
    document.querySelector(".openChat").style.display = "none";
    //
    //   if (r === "msg sent") {
    navigate("/home");
    //   }
    // });
  }

  function onSubmit(data) {
    // data["_id"] = chat._id;
    data[user] = user;
    console.log("i am here");
    postApiCall("/chats", data).then((r) => {});
  }

  return (
    <Fragment>
      <Header />
      <h1>Popup Chat Window</h1>
      <h2>Hi {user}</h2>
      <h2>Click the below button to start chatting</h2>
      <button className="openChatBtn" onClick={openForm}>
        Chat
      </button>
      <div className="openChat">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Chat</h1>
          <label for="msg">
            <b>Message</b>
          </label>
          <textarea
            placeholder="Type message.."
            name="msg"
            {...register("msg")}
            required
          ></textarea>
          {/* <textarea placeholder="Type message.." name="msg"  required></textarea> */}
          <TextField type="text" {...register("email")} label="email" />

          <button type="submit" className="btn">
            Send
          </button>

          <button type="button" className="btn close" onClick={closeForm}>
            Close
          </button>
        </form>
      </div>
    </Fragment>
  );
}
