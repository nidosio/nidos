import React, { ReactElement } from 'react';
import Head from 'next/head';
import DefaultLayout from 'components/layouts/DefaultLayout';
import LandingCard from 'components/landing-page/LandingCard/LandingCard';

export default function Home(): ReactElement {
  return (
    <div>
      <Head>
        <title>Nidos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
        <LandingCard />
      </DefaultLayout>

      {/* @TODO move global styles to a more common place */}
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
