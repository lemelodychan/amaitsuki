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
    try {
      console.log('Fetching page data for UID:', params.uid);
      const client = createClient();
      const masterRef = 'ZY1HERAAACAAcL2V';
      const page = await client.getByUID("page", params.uid, { ref: masterRef });
      if (!page) {
        console.log('Page not found:', params.uid);
        return <div>Page not found</div>;
      }

      console.log('Page data:', page);
  
      if (!page) {
        console.log('Page not found:', params.uid);
        return <div>Page not found</div>;
      }
  
      return (
        <div className={styles.main}>
          <div className={styles.container}>
            <PrismicRichText field={page.data.title} />
            <SliceZone slices={page.data.slices} components={components} />
          </div>
        </div>
      );
    } catch (error) {
      console.error('Error fetching page data:', error);
      return <div>Error fetching page data</div>;
    }
  }
  