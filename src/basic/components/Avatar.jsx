import React from "react";

export default function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.image} className="photo" />
      {props.isNew && <span className="user_tag">New</span>}
    </div>
  );
}
