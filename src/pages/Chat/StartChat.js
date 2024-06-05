import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import Header from "../../shared/components/Header";
import { postApiCall } from "../../shared/api-utils";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import "./chat.css";

export default function StartChat() {
  const navigate = useNavigate();
  // Chat box
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  //not used yet.
  // document.querySelector(".openChatBtn").addEventListener("click", openForm);
  // document.querySelector(".close").addEventListener("click", closeForm);

  function openForm() {
    document.querySelector(".openChat").style.display = "block";
  }
  function closeForm() {
    document.querySelector(".openChat").style.display = "none";
    navigate("/home");
  }

  function onSubmit(data) {
    // data["_id"] = chat._id;
    data["user"] = sessionStorage.getItem("username");
    postApiCall("/chats", data).then((r) => {});
  }

  return (
    <Fragment>
      <Header />
      <h1>Popup Chat Window</h1>
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
          <TextField
            type="text"
            {...register("email")}
            label="email"
            required
          />

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
