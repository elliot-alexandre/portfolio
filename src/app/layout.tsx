import type { Metadata, Viewport } from "next";

import Providers from "~/app/providers";
import Layout from "~/lib/layout";

type RootLayoutProps = {
  children: React.ReactNode;
};

const APP_NAME = process.env.SITE_NAME ? process.env.SITE_NAME : "Portfolio";

export const metadata: Metadata = {
  title: { default: APP_NAME, template: "portfolio" },
  description: "Personal Portfolio",
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    url: process.env.SITE_URL,
    title: process.env.SITE_NAME,
    description: process.env.SITE_DESCRIPTION,
    images: {
      url: "",
      alt: "",
    },
  },
  twitter: {
    creator: "@EliotTsx",
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
