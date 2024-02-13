import React from "react";
import "./index.scss";

export default function Button({ title, onClick, disabled }) {
  return (
    <button className="common-btn" onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
}
