/**
 * @typedef {import("@prismicio/client").Content.VideoListSlice} VideoListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoListSlice>} VideoListProps
 * @param {VideoListProps}
 */
import styles from "./page.module.scss"
import AllVideos from "@/app/components/AllVideos";

const AllVideosList = ({ slice }) => {
  return (
    <section className={styles.container}>
      <AllVideos />
    </section>
  );
};

export default AllVideosList;
