// src/components/Layout/Layout.jsx
import Header from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
       <div className="h-[70px]"></div>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
