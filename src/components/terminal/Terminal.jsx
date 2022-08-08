import React from "react";
import WinboxComponent from "../../components/winbox/WinboxComponent";
function Terminal({ onClose }) {
  return (
    <WinboxComponent
      options={{
        title: "Terrarr",
        onClose: () => {
          onClose();
        },
      }}
    />
  );
}

export default Terminal;
