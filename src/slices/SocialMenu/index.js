/**
 * @typedef {import("@prismicio/client").Content.SocialMenuSlice} SocialMenuSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SocialMenuSlice>} SocialMenuProps
 * @param {SocialMenuProps}
 */

import { PrismicNextLink } from "@prismicio/next";
import { FaYoutube, FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";

const SocialMenu = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextLink field={slice.primary.youtube}>
        <FaYoutube />
      </PrismicNextLink>
      <PrismicNextLink field={slice.primary.twitter}>
        <FaXTwitter />
      </PrismicNextLink>
      <PrismicNextLink field={slice.primary.instagram}>
        <FaInstagram />
      </PrismicNextLink>
      <PrismicNextLink field={slice.primary.tiktok}>
        <FaTiktok />
      </PrismicNextLink>
    </section>
  );
};

export default SocialMenu;
