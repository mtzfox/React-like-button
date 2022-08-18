import React, { useState } from "react";
import "./styles.css";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [icon, setIcon] = useState(<>&#128077;</>);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
      setIcon(<>&#128077;</>);
    } else {
      setLikes(likes + 1);
      setIcon(<>&#10004;</>);
    }
    setIsClicked(!isClicked);
  };

  return (
    <button
      className={`like-button ${isClicked && "liked"}`}
      onClick={handleClick}
    >
      {icon} Like
      <span className="likes-counter">{` ${likes}`}</span>
    </button>
  );
};

export default LikeButton;
