import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";
import styles from './Memberlist.module.scss';

export default async function Memberlist() {
    const client = createClient();
    const members = await client.getAllByType("member", {
        fetchOptions: {
            cache: 'no-store',
            next: { tags: ['prismic', 'member'] },
          },
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

    const sanitizeTitle = (title) => {
      return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    };
    

  return (
    <section
      className={styles.Member_Container}
    >
      {/* <div className={styles.Member_Tags}>
        <span className={styles.tag} data-type="All">All members</span>
        <span className={styles.tag} data-type="Fulltime">Full-time</span>
        <span className={styles.tag} data-type="Learning">Learning</span>
        <span className={styles.tag} data-type="Parttime">Part-time</span>
      </div> */}
      
      <div className={styles.Member_Grid}>
        {members.map((member) => (
          <PrismicNextLink key={member.id} data-type={member.data.status} className={styles.Member_Card} href={`/members/${sanitizeTitle(member.data.name)}`}>
            <div className={styles.Member_Image}>
              <PrismicNextImage field={member.data.profilepic} />
            </div>
            <p className={styles.info}>
              <span className={styles.name}>{member.data.name}</span>
              <span className={styles.status}>{member.data.status} member</span>
            </p>
          </PrismicNextLink>
        ))}
      </div>
    </section>
  );
};
