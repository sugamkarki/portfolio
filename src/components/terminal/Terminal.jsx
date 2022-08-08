import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleVisibility } from "../../redux/slices/itemsSlice";
import WinboxComponent from "../../components/winbox/WinboxComponent";
function Terminal({ onClose }) {
  const { showTerminal } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  function toggle() {
    dispatch(toggleVisibility("showTerminal"));
  }
  return (
    <WinboxComponent title="Terminal" onCloseWindow={() => toggle}>
      <div>Yeah something</div>
    </WinboxComponent>
  );
}

export default Terminal;
