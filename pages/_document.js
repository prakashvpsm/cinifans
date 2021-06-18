import React from 'react';
// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
import Document, { Html, Head, Main, NextScript } from 'next/document';
import envConfig from '../src/config/env-config';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* Must */}
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <link rel='icon' type='image/x-icon' href='/images/favicon.ico' />
          <meta name='description' content='Cinifans - your fav entertainment website' />
          <meta name='keywords' content='cinema, actor, drama, bl, thai' />
          <link rel='manifest' href='/manifest.json' />

          {/* Android */}
          <meta name='theme-color' content='#07648A' />
          <meta name='mobile-web-app-capable' content='yes' />

          {/* iOS */}
          <meta name='apple-mobile-web-app-title' content='Cinifans - your fav entertainment website' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <link rel='apple-touch-icon' href='/images/favicon.ico'></link>

         
          {/* Windows */}
          <meta name='msapplication-navbutton-color' content='#07648A' />
          <meta name='msapplication-TileColor' content='#07648A' />
          <meta name='msapplication-TileImage' content='/images/favicon.ico' />
          {/* <meta name='msapplication-config' content='browserconfig.xml' /> */}

          <link
            rel="preload"
            href="/fonts/Lato/Lato-Bold.ttf"
            as="font"
            crossOrigin=""
          />
             <link
            rel="preload"
            href="/fonts/Lato/Lato-Black.ttf"
            as="font"
            crossOrigin=""
          />
              <link
            rel="preload"
            href="/fonts/Lato/Lato-BlackItalic.ttf"
            as="font"
            crossOrigin=""
          />
              <link
            rel="preload"
            href="/fonts/Lato/Lato-Italic.ttf"
            as="font"
            crossOrigin=""
          />
              <link
            rel="preload"
            href="/fonts/Lato/Lato-Light.ttf"
            as="font"
            crossOrigin=""
          />
              <link
            rel="preload"
            href="/fonts/Lato/Lato-LightItalic.ttf"
            as="font"
            crossOrigin=""
          />
              <link
            rel="preload"
            href="/fonts/Lato/Lato-LightItalic.ttf"
            as="font"
            crossOrigin=""
          />
              <link
            rel="preload"
            href="/fonts/Lato/Lato-Regular.ttf"
            as="font"
            crossOrigin=""
          />
              <link
            rel="preload"
            href="/fonts/Lato/Lato-Thin.ttf"
            as="font"
            crossOrigin=""
          />
              <link
            rel="preload"
            href="/fonts/Lato/Lato-ThinItalic.ttf"
            as="font"
            crossOrigin=""
          />
              <link
            rel="preload"
            href="/fonts/EB_Garamond/EBGaramond-Bold.ttf"
            as="font"
            crossOrigin=""
          />
              <link
            rel="preload"
            href="/fonts/EB_Garamond/EBGaramond-BoldItalic.ttf"
            as="font"
            crossOrigin=""
          />
              <link
            rel="preload"
            href="/fonts/EB_Garamond/EBGaramond-ExtraBold.ttf"
            as="font"
            crossOrigin=""
          />
           <link
            rel="preload"
            href="/fonts/EB_Garamond/EBGaramond-ExtraBoldItalic.ttf"
            as="font"
            crossOrigin=""
          />
           <link
            rel="preload"
            href="/fonts/EB_Garamond/EBGaramond-Italic.ttf"
            as="font"
            crossOrigin=""
          />
           <link
            rel="preload"
            href="/fonts/EB_Garamond/EBGaramond-Medium.ttf"
            as="font"
            crossOrigin=""
          />
           <link
            rel="preload"
            href="/fonts/EB_Garamond/EBGaramond-MediumItalic.ttf"
            as="font"
            crossOrigin=""
          />
           <link
            rel="preload"
            href="/fonts/EB_Garamond/EBGaramond-Regular.ttf"
            as="font"
            crossOrigin=""
          />
           <link
            rel="preload"
            href="/fonts/EB_Garamond/EBGaramond-SemiBold.ttf"
            as="font"
            crossOrigin=""
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `window.apiUrl="${envConfig.app.apiUrl}"`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
