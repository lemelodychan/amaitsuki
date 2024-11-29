/**
 * @typedef {import("@prismicio/client").Content.TextSlice} TextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextSlice>} TextProps
 * @param {TextProps}
 */

import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

import styles from "./page.module.scss"

const Text = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.TextBlock}
    >
      <h3>{slice.primary.title}</h3>
      <div className={styles.text}>
        <PrismicRichText field={slice.primary.text} />
      </div>
      {slice.primary.link?.url && (
        <PrismicNextLink field={slice.primary.link} className={styles.link}>
          <span>{slice.primary.link_label || "Learn more"}</span>
          <TbArrowRight />
        </PrismicNextLink>
      )}
    </section>
  );
};

export default Text;
