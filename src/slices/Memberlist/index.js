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
  orderings: [
    {
      field: 'my.member.generation',
      direction: 'asc',
    },
    {
      field: 'my.member.name',
      direction: 'asc',
    },
  ],
});


const Memberlist = ({ slice }) => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.Member_Container}
    >
      <div className={styles.Member_Tags}>
        <span className={styles.tag} data-type="All">All members</span>
        <span className={styles.tag} data-type="Fulltime">Full-time</span>
        <span className={styles.tag} data-type="Learning">Learning</span>
        <span className={styles.tag} data-type="Parttime">Part-time</span>
      </div>
      <div className={styles.Member_Grid}>
        {members.map((member) => (
          <div key={member.id} data-type={member.data.status} className={styles.Member_Card}>
            <PrismicNextImage field={member.data.profilepic} className={styles.Member_Image} />
            <p className={styles.info}>
              <span className={styles.name}>{member.data.name}</span>
              <span className={styles.status}>{member.data.status} member</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Memberlist;
