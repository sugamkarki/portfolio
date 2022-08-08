import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeVisibility,
  increaseNumberOfTerminals,
  decreaseNumberOfTerminals,
  toggleVisibility,
} from "../../redux/slices/itemsSlice";
import WinboxComponent from "../../components/winbox/WinboxComponent";

function WinBoxContainer() {
  const { showTerminal } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  return (
    <>
      {showTerminal && (
        <WinboxComponent
          options={{
            title: "Terminal",
            onClose: () => {
              dispatch(toggleVisibility("showTerminal"));
            },
          }}
        />
      )}
    </>
  );
}

export default WinBoxContainer;
