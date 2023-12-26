/**
 * @typedef {import("@prismicio/client").Content.NavItemSlice} NavItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavItemSlice>} NavItemProps
 * @param {NavItemProps}
 */
import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";

const client = createClient();
const navleft = await client.getSingle("global_nav");

const NavLeft = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.items.map((item) => (
        <PrismicNextLink field={item.link} key={item.id}>
          <>{item.name}</>
        </PrismicNextLink>
      ))}
    </section>
  );
};

export default NavLeft;