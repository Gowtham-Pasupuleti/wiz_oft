import '../styles/globals.css'
import Nav from "../Components/Navbar"

function MyApp({ Component, pageProps }) {
  return (
    <>
  <Nav></Nav>
  <Component {...pageProps} />
  </>
  )
  
}

export default MyApp
