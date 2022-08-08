import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DesktopElement from "../../components/desktopElement/DesktopElement";
import { toggleVisibility } from "../../redux/slices/itemsSlice";
function Desktop() {
  const dispatch = useDispatch();
  const DesktopElements = [
    {
      srcImg: "/images/desktop/about.png",
      spanTitle: "About Me",
      trigger: "showAbout",
    },
    {
      srcImg: "/images/desktop/skills.png",
      spanTitle: "My Skills",
      trigger: "showMySkills",
    },
    {
      srcImg: "/images/desktop/projects.png",
      spanTitle: "My Projects",
      trigger: "showMyProjects",
    },
    {
      srcImg: "/images/desktop/contact.png",
      spanTitle: "Contact Me",
      trigger: "showContactMe",
    },
  ];
  return (
    <div className="desktop">
      <div className="desktop-row">
        <div className="desktop-elements">
          {DesktopElements.map((element, index) => {
            return (
              <DesktopElement
                srcImg={element.srcImg}
                spanTitle={element.spanTitle}
                key={index}
                toggle={() => dispatch(toggleVisibility(element.trigger))}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Desktop;
