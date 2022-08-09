import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleVisibility } from "../../redux/slices/itemsSlice";
import WinboxComponent from "../../components/winbox/WinboxComponent";
import { ReactTerminal } from "react-terminal";
function TerminalComponent({ onClose }) {
  const { showTerminal } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  function toggle() {
    dispatch(toggleVisibility("showTerminal"));
  }
  const commands = {
    whoami: "jackharper",
    cd: (directory) => `changed path to ${directory}`,
  };
  return (
    <WinboxComponent title="Terminal" onCloseWindow={() => toggle}>
      <ReactTerminal commands={commands} />
    </WinboxComponent>
  );
}

export default TerminalComponent;
