// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* faqat umumiy meta ma'lumotlar, viewport yo‘q! */}
        <meta charSet="utf-8" />
        <meta name="author" content="themepaa" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="Boston - Portfolio Template" />
        <meta name="description" content="Boston - Portfolio Template" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link href="/assets/css/style.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
