import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import YoutubeEmbed from "@/app/components/YoutubeEmbed";
import styles from './page.module.scss';

import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { TbChevronLeft } from "react-icons/tb";
import { FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";
  
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
  const page = await client.getByUID("member", params.uid, {
    ref: client.masterRef,
    fetchOptions: {
      cache: 'no-store',
    },
  });

  const videos = await client.getAllByType("video", {
      fetchOptions: {
          cache: 'no-store',
          next: { tags: ['prismic', 'video'] },
        },
      orderings: [
          {
              field: 'my.video.publication_date',
              direction: 'desc',
          },
      ],
  });
  const relatedVideos = videos.filter((video) => {
    const participants = video.data.participants;
    if (!Array.isArray(participants)) {
      return false;
    }
    return participants.some(
      (participant) => participant.member?.uid === params.uid
    );
  });

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
                    <div 
                    className={styles.color} 
                    style={{ '--member-color': page.data.color }}>{page.data.color}</div>
                </div>
                <div className={styles.MemberInfo_Description}>
                    <PrismicRichText field={page.data.description} />
                </div>
                {page.data.sns.map((item, index) => (
                    <div key={index} className={styles.MemberInfo_SNS}>
                      {item.twitter && item.twitter.url && (
                        <PrismicNextLink field={item.twitter} target="_blank">
                          <FaXTwitter />
                        </PrismicNextLink>
                      )}
                      {item.instagram && item.instagram.url && (
                        <PrismicNextLink field={item.instagram} target="_blank">
                          <FaInstagram />
                        </PrismicNextLink>
                      )}
                      {item.tiktok && item.tiktok.url && (
                        <PrismicNextLink field={item.tiktok} target="_blank">
                          <FaTiktok />
                        </PrismicNextLink>
                      )}
                    </div>
                ))}
            </div>
        </div>
        {relatedVideos.length > 0 && (
          <div>
            <h3>Participated in:</h3>
            <div className={styles.VideoGrid}>
              {relatedVideos.map((video) => (
                <YoutubeEmbed key={video.id} videoId={video.data.youtube_id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}