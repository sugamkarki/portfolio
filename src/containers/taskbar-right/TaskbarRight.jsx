import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FiChevronUp } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io";
import { BiMessageAltDetail } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import axios from "axios";
import { toggleVisibility } from "../../redux/slices/itemsSlice";
import { useEffect } from "react";
function TaskbarRight() {
  const { showUpArrowElements, showMessages } = useSelector(
    (state) => state.items
  );
  const [ip, setIP] = useState("");
  async function getIP() {
    const response = await axios.get("https://api.ipify.org/?format=json");
    setIP(response.data.ip);
  }
  useEffect(() => {
    getIP();
  }, []);
  const dispatch = useDispatch();

  return (
    <div className="taskbar taskbar-right">
      <div className="row">
        <div className={`column up-arrow-section`}>
          <a
            id="up-arrow"
            onClick={() => dispatch(toggleVisibility("showUpArrowElements"))}
          >
            <FiChevronUp />
          </a>
          <div
            className={`up-arrow-elements  ${
              showUpArrowElements ? "showLinks" : "hidden"
            }`}
          >
            <div>
              <a
                target="_blank"
                href={"https://www.linkedin.com/in/sugam-karki-4877261a3/"}
                rel="noopener noreferrer"
              >
                {/* <i className="fab fa-linkedin"></i> */}
                <AiFillLinkedin />
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href={"https:/www.github.com/sugamkarki"}
                rel="noopener noreferrer"
              >
                {/* <i className="fab fa-github"></i> */}
                <AiFillGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="column">
          <a>
            <span id="current-timestamp">
              <span id="current-time">
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
              <span id="current-date">
                {new Date().toLocaleDateString([], {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </span>
          </a>
        </div>
        <div className="column message-box-section">
          <a
            id="message-icon"
            onClick={() => dispatch(toggleVisibility("showMessages"))}
          >
            {/* <i className="far fa-comment-alt fa-flip-horizontal"></i> */}
            <BiMessageAltDetail />
          </a>
          <div className="message-box-elements">
            <div
              className={`message-box-container
         ${showMessages ? "showStats" : "hidden"}`}
            >
              <div className="message-box-header">
                <strong>Device Statistics</strong>
              </div>
              <div className="message-box-body">
                <div className="notifications">
                  <div className="notifications-header">Public IP</div>
                  <div className="notifications-body" id="publicIP">
                    {ip}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <a id="grip"></a>
        </div>
      </div>
    </div>
  );
}

export default TaskbarRight;
