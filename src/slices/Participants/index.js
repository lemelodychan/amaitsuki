/**
 * @typedef {import("@prismicio/client").Content.ParticipantsSlice} ParticipantsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ParticipantsSlice>} ParticipantsProps
 * @param {ParticipantsProps}
 */
const Participants = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for participants (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Participants;
