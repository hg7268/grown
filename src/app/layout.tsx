import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "GrowNext",
	description: "Your application description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="font-gabarito">{children}</body>
		</html>
	);
}
