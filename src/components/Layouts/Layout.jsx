// src/components/Layout/Layout.jsx
import Header from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
<<<<<<< HEAD
       <div className="h-[70px]"></div>
=======
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
