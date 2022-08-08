import React from "react";
import DesktopElement from "../../components/desktopElement/DesktopElement";
function Desktop() {
  const DesktopElements = [
    {
      srcImg: "/images/desktop/about.png",
      spanTitle: "About Me",
    },
    {
      srcImg: "/images/desktop/skills.png",
      spanTitle: "About Me",
    },
    {
      srcImg: "/images/desktop/projects.png",
      spanTitle: "About Me",
    },
    {
      srcImg: "/images/desktop/contact.png",
      spanTitle: "About Me",
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
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Desktop;
