import React from "react";
import WinBox from "react-winbox";

function WinboxComponent({ title, style, onCloseWindow, children }) {
  return (
    <WinBox
      width={"800"}
      height={500}
      x="center"
      y={"center"}
      noClose={false}
      title={title}
    >
      {children}
    </WinBox>
  );
}

export default WinboxComponent;
