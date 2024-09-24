import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const Contact = ({ nom, phone, email, updateMode, deleteContact }) => {
  return (
    <div className="contact">
      <div className="text">{nom}</div>
      <div className="text">{phone}</div>
      <div className="text">{email}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteContact} />
      </div>
    </div>
  );
};

export default Contact;
