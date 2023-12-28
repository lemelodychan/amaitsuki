import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import config from "../slicemachine.config.json";

export const endpoint = "https://amaitsuki.cdn.prismic.io/api/v2";
export const repositoryName = "amaitsuki";
const masterRef = 'ZY0-oBAAACAAcJbe'; // Add the master reference here

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 *
 * @type {prismic.ClientConfig["routes"]}
 */
// TODO: Update the routes array to match your project's route structure.
const routes = [
  {
  	type: "homepage",
  	path: "/",
  },
  {
  	type: "page",
  	path: "/:uid",
  },
  {
  	type: "member",
  	path: "/members/:uid",
  },
];

export const linkResolver = doc => {
  switch (doc.type) {
    case 'homepage':
      return '/'
    case 'page':
      return `/${doc.uid}`
    case 'member':
      return `/members/${doc.uid}`
    default:
      return null
  }
}

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param {prismicNext.CreateClientConfig} config - Configuration for the Prismic client.
 */

export const createClient = (config = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache", ref: masterRef } // Include the master reference in production
        : { next: { revalidate: 5 }, ref: masterRef }, // Include the master reference in development as well
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
