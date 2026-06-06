import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://umair-ahmad.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Umair Ahmad — Full Stack Developer",
  description:
    "CS Student at COMSATS University Islamabad building real-world web and mobile applications. Open to internship opportunities in Pakistan.",
  keywords: [
    "Umair Ahmad",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Flutter",
    "Node.js",
    "COMSATS University Islamabad",
    "Pakistan Developer",
    "Internship",
  ],
  authors: [{ name: "Umair Ahmad" }],
  creator: "Umair Ahmad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Umair Ahmad — Full Stack Developer",
    description:
      "CS Student at COMSATS University Islamabad building real-world web and mobile applications.",
    siteName: "Umair Ahmad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umair Ahmad — Full Stack Developer",
    description:
      "CS Student at COMSATS University Islamabad building real-world web and mobile applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#F5F5F5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
