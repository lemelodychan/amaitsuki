/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const prismic = require("@prismicio/client");
const sm = require("./slicemachine.config.json");

/** @returns {Promise<import('next').NextConfig>} */
module.exports = async () => {
  const client = prismic.createClient(sm.repositoryName);

  const repository = await client.getRepository();
  const locales = repository.languages.map((lang) => lang.id);

  return {
    i18n: {
      locales,
      // This is the default locale. It will not be included in URLs.
      defaultLocale: locales[0],
    },
  };
};