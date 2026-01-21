import React from 'react';
import { getPayload } from 'payload';
import config from '@/payload.config';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './styles.css';
import { Cantarell, Abril_Fatface } from 'next/font/google';

const cantarell = Cantarell({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cantarell',
});

const abrilFatface = Abril_Fatface({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-abril',
});

export const metadata = {
  description:
    'The Undergraduate Science Society of Toronto Metropolitan homepage. You can find information about our organization, our events, our services, and more, here!',
  title: 'Home - USSTM',
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });

  const siteSettings = await payload.findGlobal({
    slug: 'site-settings',
  });

  const logo = typeof siteSettings?.logo === 'object' ? siteSettings.logo : null;
  const navigation = (siteSettings?.navigation || []).map((item) => ({
    label: item.label,
    href: item.href,
    description: item.description || undefined,
    submenu: item.submenu?.map((sub) => ({
      label: sub.label,
      href: sub.href,
      description: sub.description || undefined,
    })),
  }));
  const footerText = siteSettings?.footerText || '© 2024 - Copyright PACS, All Rights Reserved.';

  return (
    <html lang="en" className={`${cantarell.variable} ${abrilFatface.variable}`}>
      <body className={cantarell.className}>
        {/* Always render Navbar; it will render a text fallback if no logo is set */}
        <Navbar logo={logo} navigation={navigation} />
        <main>{children}</main>
        <Footer footerText={footerText} />
      </body>
    </html>
  );
}
