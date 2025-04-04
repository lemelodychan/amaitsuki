import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import ColorAccessibility from "@/app/components/ColorCheck";

import DescriptionTabs from "@/app/components/DescriptionTabs";
import YoutubeEmbed from "@/app/components/YoutubeEmbed";
import styles from './page.module.scss';

import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { TbChevronLeft } from "react-icons/tb";
import { FaXTwitter, FaInstagram, FaTiktok, FaTwitch } from "react-icons/fa6";
  
export async function generateMetadata({ params }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("member", uid);

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
  const { uid } = await params;
  const client = createClient();

  const page = await client.getByUID("member", uid, {
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
      (participant) => participant.member?.uid === uid
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
            <PrismicNextImage 
              field={page.data.profilepic} 
              className={styles.MemberInfo_Image}
              fallbackAlt=""
            />
            <div className={styles.MemberInfo_Content}>
                <div className={styles.taglist}>
                    <div className={styles.gen}>Generation {page.data.generation}</div>

                    {page.data.color && (
                      <ColorAccessibility color={page.data.color} />
                    )}

                    {page.data.mbti && (
                      <div className={styles.mbti}>{page.data.mbti}</div>
                    )}
                </div>
                {page.data.projects?.some(
                  (item) =>
                    item.is_neoriyon ||
                    item.is_tsukitabi ||
                    item.is_stormyshot ||
                    item.is_vocalaction
                ) && (
                  <div className={styles.MemberInfo_Projects}>
                    <span>Also a member of </span>
                    {page.data.projects.map((item, index) => {
                      const memberships = [
                        item.is_neoriyon && (
                          <Link key="neoriyon" href="https://www.youtube.com/@NEORiYON" target="_blank">NEORiYON</Link>
                        ),
                        item.is_tsukitabi && (
                          <Link key="tsukitabi" href="https://www.youtube.com/@tsukitabi" target="_blank">Tsukitabi</Link>
                        ),
                        item.is_stormyshot && (
                          <Link key="stormyshot" href="https://www.youtube.com/@StormyShot" target="_blank">Stormy Shot</Link>
                        ),
                        item.is_vocalaction && (
                          <Link key="vocalaction" href="https://www.youtube.com/@vocalaction" target="_blank">Vocalaction</Link>
                        ),
                      ].filter(Boolean);

                      if (memberships.length > 0) {
                        return (
                          <span key={index}>
                            {memberships.map((membership, i) => (
                              <span key={`${index}-${i}`}>
                                {i > 0 && ", "}
                                {membership}
                              </span>
                            ))}
                          </span>
                        );
                      }
                      return null;
                    })}
                  </div>
                )}
                
                <div className={styles.MemberInfo_Description}>
                  <DescriptionTabs
                    description={page.data.description}
                    descriptionFr={page.data.description_fr}
                    descriptionJp={page.data.description_jp}
                  />
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
                      {item.twitch && item.twitch.url && (
                        <PrismicNextLink field={item.twitch} target="_blank">
                          <FaTwitch />
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
                <YoutubeEmbed 
                    key={video.id}
                    videoId={video.data.youtube_id} 
                    placeholderImage={video.data.image}
                    artistName={video.data.artist}
                    songName={video.data.title}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}