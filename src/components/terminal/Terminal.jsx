import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleVisibility } from "../../redux/slices/itemsSlice";
import WinboxComponent from "../../components/winbox/WinboxComponent";
import Terminal from "terminal-in-react";
function TerminalComponents() {
  const commands = {
    linkedin: () =>
      window.open("https://www.linkedin.com/in/sugam-karki-4877261a3/"),
    github: () => window.open("https://github.com/sugamkarki"),
    whoshotfirst: () => "Han Solo shot first",
    ping: () => "pong",
    hotel: () => "trivago",
    whoami: () => "sugamkarki",
    ls: () => "about, projects, contact",
    contact: () => "You can contact me on linkedin",
    help: () => {
      let keys = Object.keys(commands);
      keys = keys.map((key) => {
        return key + "\n";
      });
      return keys;
    },
  };
  return (
    <>
      <Terminal
        commands={commands}
        backgroundColor="#845EC2"
        color="#FFC75F"
        style={{ fontWeight: "bold", fontSize: "1em" }}
        descriptions={{
          "open-google": "opens google.com",
          showmsg: "shows a message",
          alert: "alert",
          popup: "alert",
        }}
        msg="You can write anything here. Example - Hello! My name is Foo and I like Bar."
        startState="maximised"
      />
    </>
  );
}
function TerminalComponent({ onClose }) {
  const { showTerminal } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  function toggle() {
    dispatch(toggleVisibility("showTerminal"));
  }
  const commands = {
    whoami: "jackharper",
    cd: (directory) => `changed path to ${directory}`,
  };
  return (
    <WinboxComponent title="Terminal" onCloseWindow={() => toggle}>
      <TerminalComponents />
    </WinboxComponent>
  );
}

export default TerminalComponent;
