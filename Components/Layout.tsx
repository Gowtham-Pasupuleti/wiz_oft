import Nav from "./Navbar";
const Layout = (props) => {
  return (
    <>
      <Nav />
      {props.children}
    </>
  );
};

export default Layout;
