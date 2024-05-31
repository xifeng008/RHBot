const CROSS_DOMAIN_PROXY_IP = process.env.NEXT_PUBLIC_CROSS_DOMAIN_PROXY_IP

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
	reactStrictMode: false,
	async rewrites() {
		return [
			{
				source: '/api/:path*', // 匹配 /api/* 的请求
				destination: CROSS_DOMAIN_PROXY_IP // 将请求代理到 https://app.llama.xyz
			}
		];
	}
};

export default nextConfig
