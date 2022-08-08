import React from "react";
import WinBox from "react-winbox";
function WinboxComponent() {
  return (
    <WinBox
      width={this.state.boxWidth ?? 500}
      height={300}
      x="center"
      y={30}
      noClose={this.state.inEditing}
    >
      <div>
        <h1>Hello, WinBox!</h1>
      </div>
    </WinBox>
  );
}

export default WinboxComponent;
