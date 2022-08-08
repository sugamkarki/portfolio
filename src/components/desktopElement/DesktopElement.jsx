import React from "react";
import { motion } from "framer-motion";
function DesktopElement({ srcImg, spanTitle, toggle }) {
  return (
    <div className="desktop-element" onClick={() => toggle()}>
      <motion.img
        className="desktop-icon"
        data-testid="close-icon"
        src={srcImg}
        alt={spanTitle}
      />
      <span className="desktop-icon-name">{spanTitle}</span>
    </div>
  );
}

export default DesktopElement;
