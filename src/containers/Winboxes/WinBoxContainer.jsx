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
import About from "../../components/about/About";
import Skills from "../../components/skills/Skills";
import Projects from "../../components/projects/Projects";
import Contact from "../../components/contact/Contact";
function WinBoxContainer() {
  const {
    showTerminal,
    showAbout,
    showMessages,
    showMySkills,
    showMyProjects,
    showContactMe,
  } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  return (
    <>
      {showTerminal && <Terminal />}
      {showAbout && <About />}
      {showMySkills && <Skills />}
      {showMyProjects && <Projects />}
      {showContactMe && <Contact />}
    </>
  );
}

export default WinBoxContainer;
