import React from "react";
import WinBox from "react-winbox";

function WinboxComponent({
  title,
  className,
  onCloseWindow,
  children,
  ...props
}) {
  return (
    <WinBox
      width={"800"}
      height={500}
      x="center"
      y={"center"}
      noClose={false}
      title={title}
      className={className}
      noShadow={false}
      {...props}

    >
      {children}
    </WinBox>
  );
}

export default WinboxComponent;
