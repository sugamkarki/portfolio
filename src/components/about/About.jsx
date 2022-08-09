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
    <WinboxComponent
      title="About"
      onCloseWindow={() => toggle}
      style={{
        backgroundColor: "pink",
        height: "30",
      }}
      height={550}
    >
      <div className="about-me">
        <h1>About Me</h1>
        <p className="intro">
          Hello, my name is Sugam Karki. I like taking an idea and tinkering it
          until I bore myself.
        </p>
        <p className="stack-intro">
          Full-Stack Web Development/Mobile Development with over 5 years of
          experience in the field.
        </p>
        <p>
          I am proficient in the following:
          <ul className="stack-ul">
            <li>Angular</li>
            <li>React/Redux</li>
            <li>Django</li>
            <li>NestJS</li>
            <li>Ruby on Rails</li>
          </ul>
        </p>
        <h3 className="educational-intro">Educational Information:</h3>
        <ul>
          <li>
            Bachelors with Honors in Software Engineering from University of
            Northampton
          </li>
          <li>CCRC College, High School</li>
          <li>Nobel Academy, SEE</li>
        </ul>
      </div>
    </WinboxComponent>
  );
}

export default About;
