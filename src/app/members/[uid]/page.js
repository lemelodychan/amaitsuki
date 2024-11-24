import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import styles from './page.module.scss';

import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { TbChevronLeft } from "react-icons/tb";
  
export async function generateMetadata({ params }) {
  const client = createClient();
  const page = await client.getByUID("member", params.uid);

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("member");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}

export default async function Page({ params }) {
  const client = createClient();
  const page = await client.getByUID("member", params.uid)

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Link href="/members">
            <button>
                <TbChevronLeft /><span>Back</span>
            </button>
        </Link>
        <h1>{page.data.name}</h1>
        <div className={styles.MemberInfo}>
            <PrismicNextImage field={page.data.profilepic} className={styles.MemberInfo_Image} />
            <div className={styles.MemberInfo_Content}>
                <div className={styles.taglist}>
                    <div className={styles.gen}>Generation {page.data.generation}</div>
                    <div className={styles.status}>{page.data.status} Member</div>
                </div>
                <div className={styles.MemberInfo_Description}>
                    <PrismicRichText field={page.data.description} />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}