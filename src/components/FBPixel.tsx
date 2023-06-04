import Script from "next/script";
import Image from "next/image";

const FBPixel = () => {
  const FB_PIXEL = process.env.NEXT_PUBLIC_FB_PIXEL;
  return (
    <>
      <Script id="fb-pixel">
        {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL}');
            fbq('track', 'PageView');`}
      </Script>
      <noscript>
        <Image
          height="1"
          width="1"
          alt=""
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
};

export default FBPixel;
