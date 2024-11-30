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

    // Group active members
    const activeMembers = members.filter((member) => member.data.is_active === true);
    // Group members on hiatus
    const hiatusMembers = members.filter((member) => member.data.is_active === false);
    

  return (
    <>
      <section
        className={styles.Member_Container}
      > 
        <h3>Active members</h3>
        <div className={styles.Member_Grid}>
          {activeMembers.map((member) => (
            <PrismicNextLink key={member.id} data-type={member.data.status} className={styles.Member_Card} href={`/members/${sanitizeTitle(member.data.name)}`}>
              <div className={styles.Member_Image}>
                <PrismicNextImage field={member.data.profilepic} />
              </div>
              <p className={styles.info}>
                <span className={styles.name}>{member.data.name}</span>
                <span className={styles.status}>Generation {member.data.generation}</span>
              </p>
            </PrismicNextLink>
          ))}
        </div>
      </section>
      <section
        className={styles.Member_Container}
      > 
        <h3>Currently on hiatus</h3>
        <div className={styles.Member_Grid}>
          {hiatusMembers.map((member) => (
            <PrismicNextLink key={member.id} data-type={member.data.status} className={styles.Member_Card} href={`/members/${sanitizeTitle(member.data.name)}`}>
              <div className={styles.Member_Image}>
                <PrismicNextImage 
                  field={member.data.profilepic}
                  alt="Member profile picture"
                />
              </div>
              <p className={styles.info}>
                <span className={styles.name}>{member.data.name}</span>
                <span className={styles.status}>Generation {member.data.generation}</span>
              </p>
            </PrismicNextLink>
          ))}
        </div>
      </section>
    </>
  );
};
