import "./globals.css";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Script from "next/script";
import ogImage from "@/assets/images/og-image.png"
export const metadata = {
  title:"Muhammad Qammar",
  description:"Senior Full Stack Web App Developer - Portfolio showcasing my skills and projects.",
  image: {
    url: "@/assets/images/og-image.png",
    alt: "og-image",
  },
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PMKRDF29ZQ"></Script>
      <Script id="google-analytics" strategy="lazyOnload">
      {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-PMKRDF29ZQ');
    `} 
    </Script>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image.url} />
      </head>
      <body>  
        <Header/>
        {/* WhatsApp widget div */}
        {children}
        <Footer/>
        <div className="elfsight-app-9aac4257-e515-4c3b-aabf-815711ea66e0" data-elfsight-app-lazy />
        <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer />    
      </body>
    </html>
  );
}

