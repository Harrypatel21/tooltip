import React from "react";

export default function ToolTip(props) {
  return (
    <div className="tooltip-trigger">
      <div className={`tooltip tooltip-${props.position}`}>
        {props.ToolText}
      </div>
      {props.children}
    </div>
  );
}
