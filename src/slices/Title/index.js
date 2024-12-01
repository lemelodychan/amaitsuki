/**
 * @typedef {import("@prismicio/client").Content.TitleSlice} TitleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TitleSlice>} TitleProps
 * @param {TitleProps}
 */
const Title = ({ slice }) => {
  const TitleTag = slice.primary.type || "h3";

  return (
    <>
      <TitleTag>
        {slice.primary.title}
      </TitleTag>
    </>
  );
};

export default Title;
