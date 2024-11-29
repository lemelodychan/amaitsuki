/**
 * @typedef {import("@prismicio/client").Content.SocialMenuSlice} SocialMenuSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SocialMenuSlice>} SocialMenuProps
 * @param {SocialMenuProps}
 */
const SocialMenu = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for social_menu (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SocialMenu;
