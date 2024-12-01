import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import styles from "./page.module.scss";
import { PrismicRichText } from "@prismicio/react";

export async function generateMetadata({ params }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("page", uid);

  return {
    title: page.data.meta_title || "Amaitsuki | Idol Dance and Vocal Cover Group from France",
    description: page.data.meta_description || "Amaitsuki is a Dance and Vocal Cover Group based in France. We cover Japanese pop idol songs on Youtube and perform in Japanese culture conventions across France and Switzerland.",
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page");

  return pages.map((page) => ({ uid: page.uid }));
}

export default async function Page({ params }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("page", uid);

  if (!page) {
    return (
      <div className={styles.main}>
        <h1>Page Not Found</h1>
        <p>The content you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <PrismicRichText field={page.data.title} />
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </div>
  );
}
