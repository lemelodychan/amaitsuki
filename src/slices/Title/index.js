/**
 * @typedef {import("@prismicio/client").Content.TitleSlice} TitleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TitleSlice>} TitleProps
 * @param {TitleProps}
 */
const Title = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for title (variation: {slice.variation}) Slices
    </section>
  );
};

export default Title;
