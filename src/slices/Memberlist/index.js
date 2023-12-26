/**
 * @typedef {import("@prismicio/client").Content.MemberlistSlice} MemberlistSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MemberlistSlice>} MemberlistProps
 * @param {MemberlistProps}
 */
const Memberlist = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for memberlist (variation: {slice.variation}) Slices
    </section>
  );
};

export default Memberlist;
