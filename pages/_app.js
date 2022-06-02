import '../styles/globals.css'
import Nav from "../Components/Navbar"
import {useEffect,useState} from "react"
import React from 'react';


function MyApp({ Component, pageProps }) {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(typeof window === "undefined");
  }, []);
  return (
    <>
    {!isSSR &&
    <>
    <body className="flex flex-col min-h-screen ">
    <header>
    <Nav></Nav>
    </header>
    <main className="flex-grow">
    <Component {...pageProps} />
    
    </main>
    <footer>
     Footer
    </footer>
  </body>
  
    
    
    </>
    
    
   
    }
   </>
  )
  
}

export default MyApp
