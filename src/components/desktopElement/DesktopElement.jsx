import React from "react";
import { motion } from "framer-motion";
function DesktopElement({ srcImg, spanTitle }) {
  return (
    <div className="desktop-element">
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
