import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";
import styles from './Videolist.module.scss';

import YoutubeEmbed from "./YoutubeEmbed";

export default async function Videolist() {
  const client = createClient();
  const videos = await client.getAllByType("video", {
      fetchOptions: {
          cache: 'no-store',
          next: { tags: ['prismic', 'video'] },
        },
      orderings: [
          {
              field: 'my.video.publication_date',
              direction: 'asc',
          },
      ],
  });

return (
  <section
    className={styles.Video_Container}
  >
    <div className={styles.Video_Grid}>
      {videos.map((video) => (
        <div key={video.id} className={styles.Video_Card}>
          <div className={styles.Video}>
              <YoutubeEmbed videoId={video.data.youtube_id} />
          </div>
          <p className={styles.info}>
            <span className={styles.title}>{video.data.title}</span>
            <span className={styles.artist}>Originally by {video.data.artist}</span>
          </p>
          {/* <LikeButton uid={video.data.youtube_id} /> */}
        </div>
      ))}
    </div>
  </section>
);
};