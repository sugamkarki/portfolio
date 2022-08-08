import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleVisibility } from "../../redux/slices/itemsSlice";
import WinboxComponent from "../winbox/WinboxComponent";
function About({ onClose }) {
  const { showAbout } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  function toggle() {
    dispatch(toggleVisibility("showAbout"));
  }
  return (
    <WinboxComponent title="About" onCloseWindow={() => toggle}>
      <div>About me</div>
    </WinboxComponent>
  );
}

export default About;
