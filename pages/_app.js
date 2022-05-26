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
    <Nav></Nav>
    <Component {...pageProps} />
    </>
    
    
   
    }
   </>
  )
  
}

export default MyApp
