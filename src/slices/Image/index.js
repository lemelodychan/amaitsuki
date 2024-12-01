/**
 * @typedef {import("@prismicio/client").Content.ImageSlice} ImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageSlice>} ImageProps
 * @param {ImageProps}
 */

import { PrismicNextImage } from "@prismicio/next";
import styles from "./page.module.scss"

const Image = ({ slice }) => {
  const imageWidth = slice.primary.is_fullwidth 
    ? "100%" 
    : `${slice.primary.image_width || "auto"}${slice.primary.image_width ? "px" : ""}`;


  return (
    <>
      <PrismicNextImage 
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        field={slice.primary.image}
        className={styles.ImageSlice}
        style={{ '--width': imageWidth }}
        fallbackAlt=""
      />
    </>
  );
};

export default Image;
