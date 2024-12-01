/**
 * @typedef {import("@prismicio/client").Content.ColumnsSlice} ColumnsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ColumnsSlice>} ColumnsProps
 * @param {ColumnsProps}
 */
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import * as TablerIcons from "tabler-icons-react";
import { ArrowRight } from 'tabler-icons-react';
import styles from "./page.module.scss";

const Columns = ({ slice }) => {
  const columnCount = slice.primary.column.length;

  return (
    <div className={styles.ColumnsContainer}>
      <h2 className={styles.ColumnsTitle}>{slice.primary.title}</h2>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className={styles.Columns}
        style={{ '--columns': columnCount }}
      >
        {slice.primary.column.map((item, index) => {

          const Icon = item.link_icon && TablerIcons[item.link_icon]
              ? TablerIcons[item.link_icon]
              : null;

          return (
            <div className={styles.column} key={item.id || index}>
              <PrismicNextImage 
                field={item.image}
                fallbackAlt=""
              />
              <h3>{item.title}</h3>
              <div className={styles.text}>
                <PrismicRichText field={item.text} />
              </div>
              {item.link?.url && (
                <PrismicNextLink field={item.link} className={styles.link}>
                  {Icon && <Icon size={16} />}
                  <span>{item.link.text || "Learn more"}</span>
                  {!Icon && <ArrowRight size={16} />}
                </PrismicNextLink>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Columns;
