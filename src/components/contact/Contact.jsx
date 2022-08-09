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
      <div className="contact">
        <a
          target="_blank"
          href={"https://www.linkedin.com/in/sugam-karki-4877261a3/"}
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <br />
        <a
          target="_blank"
          href={"https://github.com/sugamkarki"}
          rel="noopener noreferrer"
        >
          Github
        </a>
        <br />
        Or throw a stone at me or something
      </div>
    </WinboxComponent>
  );
}

export default Contact;
