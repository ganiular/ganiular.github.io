import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ganiular.github.io"),
  title: "Ganiu Quadri | Full-Stack Software Engineer",
  description:
    "Ganiu Quadri is a Full-Stack Software Engineer focused on Flutter, backend systems, APIs, and web applications.",
  openGraph: {
    title: "Ganiu Quadri | Full-Stack Software Engineer",
    description:
      "Building practical digital products across mobile, backend, and web.",
    url: "https://ganiular.github.io",
    siteName: "Ganiu Quadri Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ganiu Quadri | Full-Stack Software Engineer",
    description:
      "Building practical digital products across mobile, backend, and web.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
