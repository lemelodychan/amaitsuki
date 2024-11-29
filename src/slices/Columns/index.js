/**
 * @typedef {import("@prismicio/client").Content.ColumnsSlice} ColumnsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ColumnsSlice>} ColumnsProps
 * @param {ColumnsProps}
 */
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { TbArrowRight } from "react-icons/tb";

import styles from "./page.module.scss"

const Columns = ({ slice }) => {
  const columnCount = slice.primary.column.length;

  return (
    <>
      <h2>{slice.primary.title}</h2>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className={styles.Columns}
        style={{ '--columns': columnCount }}
      >
        {slice.primary.column.map((item, index) => (
          <div className={styles.column} key={item.id || index}>
            <PrismicNextImage field={item.image} />
            <h3>{item.title}</h3>
            <div className={styles.text}>
              <PrismicRichText field={item.text} />
            </div>
            {item.link?.url && (
              <PrismicNextLink field={item.link} className={styles.link}>
                <span>{item.link_label || "Learn more"}</span>
                <TbArrowRight />
              </PrismicNextLink>
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default Columns;
