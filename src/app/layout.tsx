import Footer from '@/app/_components/footer';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import cn from 'classnames';
import { ThemeSwitcher } from './_components/theme-switcher';
import { SyntaxHighlighter } from './_components/syntax-highlighter';

import './globals.css';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: `Pradyumna Krishna`,
  description: `Personal website of Pradyumna Krishna`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className={cn(roboto.className, 'dark:bg-black dark:text-white')}>
        <ThemeSwitcher />
        <SyntaxHighlighter />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
