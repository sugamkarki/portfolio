import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleVisibility } from "../../redux/slices/itemsSlice";
import WinboxComponent from "../winbox/WinboxComponent";
function Contact() {
  const { showContactMe } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  function toggle() {
    dispatch(toggleVisibility("showContactMe"));
  }
  return (
    <WinboxComponent title="Contact Me" onCloseWindow={() => toggle}>
      <div>Contact me</div>
    </WinboxComponent>
  );
}

export default Contact;
