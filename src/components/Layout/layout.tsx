import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import HeaderMobile from "../header/headerMobile";

const Layout = () => {
  return (
    <>
      <HeaderMobile />
      <Header />
      <main>
        {/* специальный компонент, который понимает, что нужн овстроить в зависимости от маршрута */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
