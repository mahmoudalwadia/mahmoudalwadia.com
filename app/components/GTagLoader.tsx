import Script from 'next/script';

const GTagLoader = () => (
  <>
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
    />
    <Script
      id="ga-config"
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
      }}
    />
  </>
);

export default GTagLoader;
