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
    <WinboxComponent title="My Skills" onCloseWindow={() => toggle} >
      <div className="about-me">
        <ul>
          <li>Web Development with React/Angular/Django/NestJS/Rails</li>
          <li>DOM Manipulation using vanilla JS</li>
          <li>Proficiency with TypeScript</li>
          <li>Bash Scripting</li>
          <li>Working With Linux</li>
        </ul>
      </div>
    </WinboxComponent>
  );
}

export default Skills;
