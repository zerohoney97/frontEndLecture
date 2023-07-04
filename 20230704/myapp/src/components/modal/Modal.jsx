import React, { useEffect } from "react";
import "./modal.css";
const Modal = ({ changeDisplay, isDisplay }) => {

  useEffect(()=>{
    console.log(isDisplay)
  })

  return (
    <div>
      <button
        className={isDisplay ? "calendarButton unVisible" : "calendarButton"}
        onClick={changeDisplay}
      >
        Calendar
      </button>
    </div>
  );
};

export default Modal;
