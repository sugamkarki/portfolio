import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeVisibility,
  increaseNumberOfTerminals,
  decreaseNumberOfTerminals,
  toggleVisibility,
} from "../../redux/slices/itemsSlice";
import WinboxComponent from "../../components/winbox/WinboxComponent";
import Terminal from "../../components/terminal/Terminal";
function WinBoxContainer() {
  const { showTerminal } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  return (
    <>
      {showTerminal && (
        <Terminal
          onClose={() => {
            dispatch(toggleVisibility("showTerminal"));
          }}
        />
      )}
    </>
  );
}

export default WinBoxContainer;
