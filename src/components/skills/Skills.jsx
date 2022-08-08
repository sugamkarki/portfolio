import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleVisibility } from "../../redux/slices/itemsSlice";
import WinboxComponent from "../winbox/WinboxComponent";
function Skills() {
  const { showMySkills } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  function toggle() {
    dispatch(toggleVisibility("showMySkills"));
  }
  return (
    <WinboxComponent title="My Skills" onCloseWindow={() => toggle}>
      <div>My Skills</div>
    </WinboxComponent>
  );
}

export default Skills;
