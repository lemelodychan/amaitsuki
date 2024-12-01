import React from "react";
import { getContrast } from "polished";
import styles from "./ColorCheck.module.scss";

const ColorAccessibility = ({ color }) => {
    const contrastRatio = getContrast(color, "#ffffff");
    const isLowContrast = contrastRatio < 2;
  
    return (
      <div
        className={`${styles.color} ${isLowContrast ? styles.contrast : ""}`}
        style={{ "--member-color": color }}
      >
        {color}
      </div>
    );
  };
  
  export default ColorAccessibility;