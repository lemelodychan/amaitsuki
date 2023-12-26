/**
 * @typedef {import("@prismicio/client").Content.LogoSlice} LogoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LogoSlice>} LogoProps
 * @param {LogoProps}
 */
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const Logo = ({ slice }) => {
  return (
    <PrismicNextLink field={slice.primary.link}>
      <PrismicNextImage field={slice.primary.image} />
    </PrismicNextLink>
  );
};

export default Logo;
