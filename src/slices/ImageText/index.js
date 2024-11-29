/**
 * @typedef {import("@prismicio/client").Content.ImageTextSlice} ImageTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageTextSlice>} ImageTextProps
 * @param {ImageTextProps}
 */
const ImageText = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for image_text (variation: {slice.variation}) Slices
    </section>
  );
};

export default ImageText;
