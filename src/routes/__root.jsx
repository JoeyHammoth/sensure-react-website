import { createRootRoute, Outlet } from "@tanstack/react-router";

import Header from "../Miscellaneous/Header.jsx";
import Footer from "../Miscellaneous/Footer.jsx";

export const Route = createRootRoute({
  component: function () {
    return (
      <div className="main-container">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  },
});
