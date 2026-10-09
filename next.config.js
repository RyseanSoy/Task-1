


/** @type {import('next').NextConfig} */

const nextConfig = {

  images: {

    remotePatterns: [

      {

        protocol: "https",

        hostname: "tudublin-1-1.b-cdn.net/",

      },

    ],

  },

};


module.exports = nextConfig;