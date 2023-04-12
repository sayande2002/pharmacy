import React from "react";
import { Tooltip } from "react-tippy";

const NewTooltip = ({ children, title }) => {
  return (
    <Tooltip title={title} position="bottom" trigger="mouseenter" arrow={false}>
      {children}
    </Tooltip>
  );
};

export default NewTooltip;
