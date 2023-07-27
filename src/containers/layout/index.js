import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
