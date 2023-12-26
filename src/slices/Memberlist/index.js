/**
 * @typedef {import("@prismicio/client").Content.MemberlistSlice} MemberlistSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MemberlistSlice>} MemberlistProps
 * @param {MemberlistProps}
 */

import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";
import styles from './page.module.scss';

const client = createClient();
const members = await client.getAllByType("member", {
  fetchLinks: "member.data.name",
});


const Memberlist = ({ slice }) => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.Member_Grid}
    >
      {members.map((member) => (
        <div key={member.id} className={styles.Member_Card}>
          <PrismicNextImage field={member.data.profilepic} className={styles.Member_Image} />
          <p>{member.data.name}</p>
        </div>
      ))}
    </section>
  );
};

export default Memberlist;
