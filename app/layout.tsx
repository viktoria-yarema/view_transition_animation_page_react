import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ViewTransition } from "react";
import { ScrollRestoration } from "@/components/ScrollRestoration";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Movies App - ViewTransition Demo",
	description:
		"A movies app demonstrating React 19 ViewTransition API with smooth page animations",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ViewTransition>{children}</ViewTransition>
				<ScrollRestoration />
			</body>
		</html>
	);
}
