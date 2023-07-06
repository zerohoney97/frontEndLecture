import React from "react";
import "./board.css";
import { useNavigate } from "react-router-dom";

const BoardFooter = () => {
  const navigate = useNavigate();

  return (
    <div className="board-footer-container">
      <div
        class="post-registration-button"
        onClick={() => {
          navigate("/insert");
        }}
      >
        <i class="fas fa-plus"></i>
        <span>글 등록</span>
      </div>
    </div>
  );
};

export default BoardFooter;
