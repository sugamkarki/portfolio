import React, { useState } from "react";
import {
  BsWindows,
  BsImageFill,
  BsFillTerminalFill,
  BsLaptop,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiEnvelope } from "react-icons/bi";
import { VscGithub } from "react-icons/vsc";
import {
  AiFillGithub,
  AiOutlinePoweroff,
  AiOutlineSearch,
} from "react-icons/ai";
import WinboxComponent from "../../components/winbox/WinboxComponent";
function TaskbarLeft() {
  const [showStart, setShowStart] = useState(false);
  function toggleShowStart() {
    setShowStart(!showStart);
  }
  function redirectTo(link) {}

  return (
    <div className="taskbar taskbar-left">
      <div className="row">
        <div className="column start-menu-section">
          <a id="start-menu-icon" onClick={() => toggleShowStart()}>
            <BsWindows />
          </a>
          <div
            className={`start-menu-elements ${
              showStart ? "startShown" : "hidden"
            }`}
          >
            <WinboxComponent />
            <div className="start-col start-left">
              <ul>
                <li id="start-left-title">START</li>
                <li>
                  <CgProfile />
                </li>
                <li>
                  <a>
                    <BiEnvelope />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/sugamkarki"
                    rel="noopener noreferrer"
                  >
                    <VscGithub />
                  </a>
                </li>
                <li>
                  <a>
                    <BsImageFill />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/sugamkarki"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li>
                  <a id="powerOff">
                    <AiOutlinePoweroff />
                  </a>
                </li>
              </ul>
            </div>
            <div className="start-col start-right">
              <ul>
                <li id="start-right-title">
                  <small>Helpful Resources</small>
                </li>

                <li>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    rel="noopener noreferrer"
                  >
                    MDN Web Docs
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    rel="noopener noreferrer"
                  >
                    IETF | RFCs
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    rel="noopener noreferrer"
                  >
                    W3Schools
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    rel="noopener noreferrer"
                  >
                    IEEE Xplore
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    rel="noopener noreferrer"
                  >
                    PortSwigger Web Security Academy
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    rel="noopener noreferrer"
                  >
                    Hack The Box
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    rel="noopener noreferrer"
                  >
                    TryHackMe
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="column">
          <a>
            {/* <i className="fas fa-search fa-flip-horizontal"></i> */}
            <AiOutlineSearch />
          </a>
        </div>
        <div className="column">
          <a id="text-editor">
            <i
              className="fas fa-laptop-code"
              style={{
                color: "#ff6363",
              }}
            ></i>
            <BsLaptop />
          </a>
        </div>
        <div className="column">
          <a id="terminal">
            <BsFillTerminalFill />
            {/* <i
              className="fas fa-terminal"
              style={{
                backgroundColor: "#2b2424",
              }}
            ></i> */}
          </a>
        </div>
      </div>
    </div>
  );
}

export default TaskbarLeft;
