/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['assets.pokemon.com','pokedex.hybridshivam.com']
  }

}

module.exports = nextConfig
