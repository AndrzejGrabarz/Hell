import Head from 'next/head';
import '@/styles/globals.css';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pasiek Dominik Dominikowski</title>
        <meta name="title" content='Rodzinny Biznes Pasieczny - Naturalne Miody i Produkty Pszczele"' />
        <meta name="description" content="Naturalne miody, miody smakowe, miody pitne, maści i krople propolisowe, ozdoby z wosku pszczelego oraz pakiety prezentowe - wszystko z rodzinnej pasieki z własnych pszczół i roślin." />
        <meta name="author" content="Andrzej Grabarz" />
        <meta name="language" content="pl" />
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="safe for kids" />
        <meta name="copyright" content="Copyright 2024 Rodzinna Pasieka" />

        <meta httpEquiv="Content-language" content="pl" />
        <meta httpEquiv="Cache-Control" content="no-cache" />

        <meta name="viewport" content="width=device-width initial-scale=1.0" />
        <meta name="HandheldFriendly" content="true" />

        <meta property="og:title" content="Rodzinny Biznes Pasieczny" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/Domino/miód-1.jpg" />
        <meta property="og:url" content="https://miodydominikpasieka.vercel.app/" />
        <meta property="og:desciption" content="Naturalne miody, miody smakowe, miody pitne, maści i krople propolisowe, ozdoby z wosku pszczelego oraz pakiety prezentowe - wszystko z rodzinnej pasieki z własnych pszczół i roślin." />
        <meta property="og:locale" content="pl" />
        <meta property="og:site_name" content="Dominik Dominikowski Pasieka" />
        
      </Head>
      <GoogleTagManager gtmId="G-9LGPTWFQZF" />
      <GoogleAnalytics gaId="G-9LGPTWFQZF" />
      <Component {...pageProps} />
    </>

  );
}
