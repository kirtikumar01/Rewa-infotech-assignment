/** @type {import('next').NextConfig} */
const nextConfig = {redirects:async()=>{return [{source:"/",destination:"/dashboard",permanent:true}]}}

module.exports = nextConfig
