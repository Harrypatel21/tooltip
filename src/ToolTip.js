import React from "react";

export default function ToolTip(props) {
  return (
    // Container for the tooltip trigger element
    <div className="tooltip-trigger">
      {/* Tooltip element */}
      {/* The tooltip's position is determined by the "position" prop */}
      {/* The class "tooltip" is combined with "tooltip-{position}" to apply the correct position styling */}
      <div className={`tooltip tooltip-${props.position}`}>
        {/* The text to be displayed inside the tooltip */}
        {props.ToolText}
      </div>

      {/* The child elements passed to the ToolTip component */}
      {/* These child elements are displayed along with the tooltip */}
      {props.children}
    </div>
  );
}
