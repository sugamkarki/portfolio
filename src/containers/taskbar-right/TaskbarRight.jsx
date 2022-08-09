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
import { toggleVisibility } from "../../redux/slices/itemsSlice";
function TaskbarRight() {
  const { showUpArrowElements, showMessages } = useSelector(
    (state) => state.items
  );
  const dispatch = useDispatch();
  //   const [showItems, setShowItems] = useState({
  //     links: false,
  //     stats: false,
  //   });
  //   function toggleItems(item) {
  //     setShowItems({
  //       ...showItems,
  //       [item]: !showItems[item],
  //     });
  //   }
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
              <a>
                {/* <i className="fab fa-facebook"></i> */}
                <GrFacebookOption />
              </a>
            </div>
            <div>
              <a>
                {/* <i className="fab fa-twitter"></i> */}
                <IoLogoTwitter />
              </a>
            </div>
            <div>
              <a>
                {/* <i className="fab fa-linkedin"></i> */}
                <AiFillLinkedin />
              </a>
            </div>
            <div>
              <a>
                {/* <i className="fab fa-github"></i> */}
                <AiFillGithub />
              </a>
            </div>
            <div>
              <a>
                {/* <i className="fab fa-youtube"></i> */}
                <AiFillYoutube />
              </a>
            </div>
            <div>
              <a>
                {/* <i className="fab fa-telegram"></i> */}
                <FaTelegramPlane />
              </a>
            </div>
            <div>
              <a>
                {/* <i className="fab fa-instagram"></i> */}
                <AiOutlineInstagram />
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
                  <div className="notifications-body" id="publicIP"></div>
                </div>
                <div className="notifications">
                  <div className="notifications-header">Location</div>
                  <div className="notifications-body" id="location">
                    <strong>Show</strong>
                  </div>
                </div>
                <div className="notifications">
                  <div className="notifications-header">Clipboard</div>
                  <div className="notifications-body" id="clipboard">
                    <strong>Show</strong>
                  </div>
                </div>
                <div className="notifications">
                  <div className="notifications-header">Mouse Position</div>
                  <div className="notifications-body" id="mousePosition"></div>
                </div>
                <div className="notifications">
                  <div className="notifications-header">Screen Share</div>
                  <div className="notifications-body" id="screenCapture">
                    Capture
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
