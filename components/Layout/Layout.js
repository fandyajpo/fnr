import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="fixed w-full border-b">
        <Header />
        <Navbar />
      </div>
      <main className="px-4 md:px-8 lg:px-44 py-24">{children}</main>
    </React.Fragment>
  );
};

export default Layout;
