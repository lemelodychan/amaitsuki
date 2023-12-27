/**
 * @typedef {import("@prismicio/client").Content.VideoListSlice} VideoListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoListSlice>} VideoListProps
 * @param {VideoListProps}
 */
import styles from "./page.module.scss"
import Videolist from "@/app/components/Videolist";

const VideoList = ({ slice }) => {
  return (
    <section className={styles.container}>
      <h2>Videos</h2>
      <Videolist />
    </section>
  );
};

export default VideoList;
