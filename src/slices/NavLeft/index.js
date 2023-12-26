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
            <li key={item.id}>
              <PrismicNextLink field={item.link}>
                  <>{item.name}</>
              </PrismicNextLink>
            </li>
      ))}
    </section>
  );
};

export default NavLeft;