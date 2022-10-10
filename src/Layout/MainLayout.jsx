import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const MainLayout = () => {
  return (
    <section>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </section>
  );
};

export default MainLayout;
