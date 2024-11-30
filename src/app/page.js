import styles from './page.module.scss'

import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from '@/slices';

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </main>
  )
}