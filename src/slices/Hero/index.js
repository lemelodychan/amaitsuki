/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
import React from "react";
import Carousel from "../../app/components/Carousel";
import styles from "./page.module.scss";

const HeroSlice = ({ slice }) => {
  const images = slice.primary.images;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.Hero}
    >
      <Carousel images={images} />
    </section>
  );
};

export default HeroSlice;