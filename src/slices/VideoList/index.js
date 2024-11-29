/**
 * @typedef {import("@prismicio/client").Content.VideoListSlice} VideoListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoListSlice>} VideoListProps
 * @param {VideoListProps}
 */
import styles from "./page.module.scss"
import Videolist from "@/app/components/Videolist";
import Link from "next/link";

import { TbArrowRight } from "react-icons/tb";

const VideoList = ({ slice }) => {
  return (
    <section className={styles.container}>
      <h2>Latest Videos</h2>
      <Link href="/all-videos">
            <button>
                <span>See all</span><TbArrowRight />
            </button>
      </Link>
      <Videolist />
    </section>
  );
};

export default VideoList;
