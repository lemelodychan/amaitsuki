// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type GlobalNavDocumentDataSlicesSlice =
  | LogoSlice
  | NavRightSlice
  | NavLeftSlice;

/**
 * Content for Global Nav documents
 */
interface GlobalNavDocumentData {
  /**
   * Name field in *Global Nav*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: global_nav.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Slice Zone field in *Global Nav*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: global_nav.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<GlobalNavDocumentDataSlicesSlice>;
}

/**
 * Global Nav document from Prismic
 *
 * - **API ID**: `global_nav`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GlobalNavDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<GlobalNavDocumentData>,
    "global_nav",
    Lang
  >;

type HomepageDocumentDataSlicesSlice = VideoListSlice | HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Item in *Member → SNS*
 */
export interface MemberDocumentDataSnsItem {
  /**
   * Twitter field in *Member → SNS*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: member.sns[].twitter
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  twitter: prismic.LinkField;

  /**
   * Instagram field in *Member → SNS*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: member.sns[].instagram
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  instagram: prismic.LinkField;

  /**
   * Tiktok field in *Member → SNS*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: member.sns[].tiktok
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  tiktok: prismic.LinkField;
}

type MemberDocumentDataSlicesSlice = never;

/**
 * Content for Member documents
 */
interface MemberDocumentData {
  /**
   * Name field in *Member*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: member.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Generation field in *Member*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: member.generation
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  generation: prismic.NumberField;

  /**
   * Status field in *Member*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: member.status
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  status: prismic.SelectField<
    "Full-time" | "Learning" | "Part-time" | "Hiatus"
  >;

  /**
   * Profile picture field in *Member*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: member.profilepic
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  profilepic: prismic.ImageField<never>;

  /**
   * Description field in *Member*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: member.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * SNS field in *Member*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: member.sns[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  sns: prismic.GroupField<Simplify<MemberDocumentDataSnsItem>>;

  /**
   * Slice Zone field in *Member*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: member.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<MemberDocumentDataSlicesSlice> /**
   * Meta Title field in *Member*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: member.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Member*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: member.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Member*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: member.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Member document from Prismic
 *
 * - **API ID**: `member`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MemberDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<MemberDocumentData>, "member", Lang>;

type PageDocumentDataSlicesSlice = MemberlistSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Video → Participants*
 */
export interface VideoDocumentDataParticipantsItem {
  /**
   * Member field in *Video → Participants*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: video.participants[].member
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  member: prismic.ContentRelationshipField<"member">;
}

type VideoDocumentDataSlicesSlice = never;

/**
 * Content for Video documents
 */
interface VideoDocumentData {
  /**
   * Publication Date field in *Video*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: video.publication_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  publication_date: prismic.DateField;

  /**
   * Title field in *Video*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: video.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Artist field in *Video*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: video.artist
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  artist: prismic.KeyTextField;

  /**
   * URL field in *Video*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: video.url
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  url: prismic.LinkField;

  /**
   * Featured Image field in *Video*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: video.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Youtube ID field in *Video*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: video.youtube_id
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  youtube_id: prismic.KeyTextField;

  /**
   * Participants field in *Video*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: video.participants[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  participants: prismic.GroupField<Simplify<VideoDocumentDataParticipantsItem>>;

  /**
   * Slice Zone field in *Video*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: video.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<VideoDocumentDataSlicesSlice> /**
   * Meta Description field in *Video*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: video.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Video*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: video.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Video*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: video.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Video document from Prismic
 *
 * - **API ID**: `video`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type VideoDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<VideoDocumentData>, "video", Lang>;

export type AllDocumentTypes =
  | GlobalNavDocument
  | HomepageDocument
  | MemberDocument
  | PageDocument
  | VideoDocument;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Logo → Default → Primary*
 */
export interface LogoSliceDefaultPrimary {
  /**
   * Image field in *Logo → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: logo.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Link field in *Logo → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: logo.default.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for Logo Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LogoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LogoSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Logo*
 */
type LogoSliceVariation = LogoSliceDefault;

/**
 * Logo Shared Slice
 *
 * - **API ID**: `logo`
 * - **Description**: Logo
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LogoSlice = prismic.SharedSlice<"logo", LogoSliceVariation>;

/**
 * Primary content in *Memberlist → Items*
 */
export interface MemberlistSliceDefaultItem {
  /**
   * Member field in *Memberlist → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: memberlist.items[].member
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  member: prismic.ContentRelationshipField<"member">;
}

/**
 * Default variation for Memberlist Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MemberlistSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<MemberlistSliceDefaultItem>
>;

/**
 * Slice variation for *Memberlist*
 */
type MemberlistSliceVariation = MemberlistSliceDefault;

/**
 * Memberlist Shared Slice
 *
 * - **API ID**: `memberlist`
 * - **Description**: Memberlist
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MemberlistSlice = prismic.SharedSlice<
  "memberlist",
  MemberlistSliceVariation
>;

/**
 * Primary content in *NavLeft → Items*
 */
export interface NavLeftSliceDefaultItem {
  /**
   * Name field in *NavLeft → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: nav_left.items[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Link field in *NavLeft → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: nav_left.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for NavLeft Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavLeftSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<NavLeftSliceDefaultItem>
>;

/**
 * Slice variation for *NavLeft*
 */
type NavLeftSliceVariation = NavLeftSliceDefault;

/**
 * NavLeft Shared Slice
 *
 * - **API ID**: `nav_left`
 * - **Description**: NavLeft
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavLeftSlice = prismic.SharedSlice<
  "nav_left",
  NavLeftSliceVariation
>;

/**
 * Primary content in *NavRight → Items*
 */
export interface NavRightSliceDefaultItem {
  /**
   * Name field in *NavRight → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: nav_right.items[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Link field in *NavRight → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: nav_right.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for NavRight Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavRightSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<NavRightSliceDefaultItem>
>;

/**
 * Slice variation for *NavRight*
 */
type NavRightSliceVariation = NavRightSliceDefault;

/**
 * NavRight Shared Slice
 *
 * - **API ID**: `nav_right`
 * - **Description**: NavRight
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavRightSlice = prismic.SharedSlice<
  "nav_right",
  NavRightSliceVariation
>;

/**
 * Item in *Participants → Default → Primary → Members*
 */
export interface ParticipantsSliceDefaultPrimaryMembersItem {
  /**
   * Member field in *Participants → Default → Primary → Members*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: participants.default.primary.members[].member
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  member: prismic.ContentRelationshipField<"member">;
}

/**
 * Primary content in *Participants → Default → Primary*
 */
export interface ParticipantsSliceDefaultPrimary {
  /**
   * Members field in *Participants → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: participants.default.primary.members[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  members: prismic.GroupField<
    Simplify<ParticipantsSliceDefaultPrimaryMembersItem>
  >;
}

/**
 * Default variation for Participants Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ParticipantsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ParticipantsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Participants*
 */
type ParticipantsSliceVariation = ParticipantsSliceDefault;

/**
 * Participants Shared Slice
 *
 * - **API ID**: `participants`
 * - **Description**: Participants
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ParticipantsSlice = prismic.SharedSlice<
  "participants",
  ParticipantsSliceVariation
>;

/**
 * Default variation for VideoList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoListSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *VideoList*
 */
type VideoListSliceVariation = VideoListSliceDefault;

/**
 * VideoList Shared Slice
 *
 * - **API ID**: `video_list`
 * - **Description**: VideoList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoListSlice = prismic.SharedSlice<
  "video_list",
  VideoListSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      GlobalNavDocument,
      GlobalNavDocumentData,
      GlobalNavDocumentDataSlicesSlice,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      MemberDocument,
      MemberDocumentData,
      MemberDocumentDataSnsItem,
      MemberDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      VideoDocument,
      VideoDocumentData,
      VideoDocumentDataParticipantsItem,
      VideoDocumentDataSlicesSlice,
      AllDocumentTypes,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      LogoSlice,
      LogoSliceDefaultPrimary,
      LogoSliceVariation,
      LogoSliceDefault,
      MemberlistSlice,
      MemberlistSliceDefaultItem,
      MemberlistSliceVariation,
      MemberlistSliceDefault,
      NavLeftSlice,
      NavLeftSliceDefaultItem,
      NavLeftSliceVariation,
      NavLeftSliceDefault,
      NavRightSlice,
      NavRightSliceDefaultItem,
      NavRightSliceVariation,
      NavRightSliceDefault,
      ParticipantsSlice,
      ParticipantsSliceDefaultPrimaryMembersItem,
      ParticipantsSliceDefaultPrimary,
      ParticipantsSliceVariation,
      ParticipantsSliceDefault,
      VideoListSlice,
      VideoListSliceVariation,
      VideoListSliceDefault,
    };
  }
}
