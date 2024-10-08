import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'aos/dist/aos.css';
import { NextPage } from 'next';
import React from 'react';
import AOS from 'aos';
import Head from 'next/head';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
  authenticate?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  
  const authProps = Component.authenticate;  
  
  React.useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  return (
    <div>
      <Head>
      <title>369 Wellness & Fitness</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link rel="icon" href="/assets/gym/log-2.png" />
      <link href="https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Lobster+Two&family=Neuton:wght@200;300&display=swap" rel="stylesheet"></link>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </div>
  )
}
