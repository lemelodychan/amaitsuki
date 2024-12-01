"use client";

import { useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import styles from "./DescriptionTabs.module.scss";

const DescriptionTabs = ({ description, descriptionFr, descriptionJp }) => {
  const [activeTab, setActiveTab] = useState("default");

  const tabs = [
    (description && description.length > 0) && { id: "default", label: "EN", content: description },
    (descriptionFr && descriptionFr.length > 0) && { id: "fr", label: "FR", content: descriptionFr },
    (descriptionJp && descriptionJp.length > 0) && { id: "jp", label: "JP", content: descriptionJp },
  ].filter(Boolean); // Remove tabs without content

  return (
    <div className={styles.DescriptionTabs}>
      {tabs.length > 1 && (
        <div className={styles.tabHeaders}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={activeTab === tab.id ? styles.active : ""}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
      <div className={styles.tabContent}>
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className={styles.tabPane}>
                <PrismicRichText field={tab.content} />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default DescriptionTabs;