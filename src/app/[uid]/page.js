import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import styles from './page.module.scss';

import { PrismicRichText } from "@prismicio/react";
  
export async function generateMetadata({ params }) {
  const client = createClient();
  const page = await client.getByUID("page", params.uid);

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

  export default async function Page({ params }) {
    const client = createClient();
  
    const casestudy = await client.getByUID("page", params.uid)
  
    return (
      <div className={styles.main}>
        <div className={styles.container}>
          <PrismicRichText field={page.data.title} />
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </div>
    );
  }