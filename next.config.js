// const withOffline = require("next-offline");

// const nextConfig = {
//   workboxOpts: {
//     swDest: process.env.NEXT_EXPORT
//       ? "service-worker.js"
//       : "static/service-worker.js",
//     runtimeCaching: [
//       {
//         urlPattern: /^https?.*/,
//         handler: "NetworkFirst",
//         options: {
//           cacheName: "offlineCache",
//           expiration: {
//             maxEntries: 200,
//           },
//         },
//       },
//     ],
//   },
//   experimental: {
//     async rewrites() {
//       return [
//         {
//           source: "/service-worker.js",
//           destination: "/_next/static/service-worker.js",
//         },
//       ];
//     },
//   },
// };

// module.exports = withOffline(nextConfig);

module.exports = {
  target: "serverless",
};
