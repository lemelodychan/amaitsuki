/**
 * @typedef {import("@prismicio/client").Content.ButtonSlice} ButtonSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ButtonSlice>} ButtonProps
 * @param {ButtonProps}
 */
import { PrismicNextLink } from "@prismicio/next";
import * as TablerIcons from "tabler-icons-react";
import { ArrowRight } from 'tabler-icons-react';
import styles from "./page.module.scss";

const Button = ({ slice }) => {
  const { button_type, link, icon, show_trailing_icon, alignment } = slice.primary;
  const buttonClass = button_type === "Primary" ? styles.primary : styles.secondary;
  const Icon = icon && TablerIcons[icon];
  const buttonStyle = { justifyContent: alignment || "center" };

  return (
    <div className={styles.buttonContainer} style={buttonStyle}>
      <PrismicNextLink field={link} className={`${styles.button} ${buttonClass}`}>
        {Icon && <Icon size={16} className={styles.icon} />}
        <span>{link.text || "Learn more"}</span>
        {show_trailing_icon && <TbArrowRight size={16} className={styles.arrowIcon} />}
      </PrismicNextLink>
    </div>
  );
};

export default Button;