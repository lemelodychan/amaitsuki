/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
import styles from './page.module.scss'
import { PrismicNextImage } from "@prismicio/next";

const Hero = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage 
        className={styles.Hero}
        field={slice.primary.image}
        imgixParams={{ auto: false }}
      />
    </section>
  );
};

export default Hero;
