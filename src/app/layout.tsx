import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Creative Chaos | Your Innovation Delivery Partners',
  description: 'Creative Chaos is a technology innovation delivery agency that helps startups and enterprises develop their next big idea.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US" className="no-js no-svg">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Creative Chaos | Your Innovation Delivery Partners" />
        <meta property="og:description" content="Creative Chaos is a technology innovation delivery agency that helps startups and enterprises develop their next big idea." />
        <meta property="og:url" content="https://creativechaos.co/" />
        <meta property="og:site_name" content="Creative Chaos" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Creative Chaos is a technology innovation delivery agency that helps startups and enterprises develop their next big idea." />
        <meta name="twitter:title" content="Creative Chaos | Your Innovation Delivery Partners" />

        <link rel="stylesheet" href="/ajax_style.css" />
        <link rel="stylesheet" href="/style1.css" />
        <link rel="stylesheet" href="/font.css" />
        <link rel="stylesheet" href="/style2.css" />
        <link rel="stylesheet" href="/fontawesome_min.css" />
        <link rel="stylesheet" href="/style3.css" />

        <style>
          {`@media (max-width: 1370px) {
            #header .overlayMenu .menu li a {
              font-size: 2vw;
            }
          }`}
        </style>
      </Head>

      <body className="js">
        {children}

        {/* Move the script here */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var wpcf7 = {
                apiSettings: {
                  root: "https://creativechaos.co/wp-json/contact-form-7/v1",
                  namespace: "contact-form-7/v1"
                },
                recaptcha: {
                  messages: {
                    empty: "Please verify that you are not a robot."
                  }
                },
                cached: "1"
              };
            `,
          }}
        />

        {/* External scripts can stay here */}
        <script src="https://creativechaos.co/wp-includes/js/jquery/jquery.js"></script>
        <script src="https://creativechaos.co/wp-content/themes/ccweb/js/settings.min.js?ver=2.1"></script>
      </body>
    </html>
  );
}
