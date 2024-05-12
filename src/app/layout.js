import "./globals.css";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Script from "next/script";
export const metadata = {
  title:{
    default:"Muhammad Qammar"
  },
  description:"Full Stack Web App Developer"
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

