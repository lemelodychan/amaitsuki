import { PrismicRichText } from "@prismicio/react";
import { TbAlertCircle, TbAlertTriangle, TbInfoCircle } from "react-icons/tb";
import styles from "./page.module.scss";

/**
 * @param {AnnouncementProps}
 */
const Announcement = ({ slice }) => {
  const sentimentClass = (slice.primary.sentiment || "info").toLowerCase();
  const renderIcon = () => {
    switch (sentimentClass) {
      case "warning":
        return <TbAlertTriangle />;
      case "success":
        return <TbAlertCircle />;
      case "info":
      default:
        return <TbInfoCircle />;
    }
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${styles.announcement} ${styles[sentimentClass]}`}
    >
      <div className={styles.icon}>
        {renderIcon()}
      </div>
      <div className={styles.text}>
        <PrismicRichText field={slice.primary.text} />
      </div>
    </section>
  );
};

export default Announcement;