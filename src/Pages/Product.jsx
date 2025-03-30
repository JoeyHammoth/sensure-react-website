import ObserverProvider from "../Miscellaneous/ObserverProvider.tsx";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import HeaderProd from "../Miscellaneous/HeaderProd.jsx";
import SectionOne from "../Sections/SectionOne.jsx";
import SectionTwo from "../Sections/SectionTwo.jsx";
import SectionThree from "../Sections/SectionThree.jsx";
import SectionFour from "../Sections/SectionFour.jsx";
import SectionFive from "../Sections/SectionFive.jsx";
import Footer from "../Miscellaneous/Footer.jsx";

import "./Product.css";

const queryClient = new QueryClient();

const Product = function () {
  return (
    <StrictMode>
      <ObserverProvider>
        <QueryClientProvider client={queryClient}>
          <div className="main-container">
            <HeaderProd />
            <div className="white-bg">
              <div className="body">
                <div className="header-gap"></div>
                <SectionOne className="section-one" />
              </div>
            </div>
            <img
              className="image-one motion-preset-expand"
              src="https://d3bhvpql1mmbm1.cloudfront.net/img13.png"
              alt="Doctor"
            />
            <div className="spacer waves lowish-margin"></div>
            <div className="grey-bg">
              <div className="body">
                <SectionTwo />
              </div>
            </div>
            <div className="spacer waves-rev"></div>
            <div className="white-bg">
              <div className="body">
                <SectionThree />
              </div>
            </div>
            <div className="spacer-crop waves-cropped"></div>
            <div className="grey-bg">
              <div className="body">
                <SectionFour />
              </div>
            </div>
            <div className="spacer waves-rev"></div>
            <div className="white-bg">
              <div className="body">
                <SectionFive />
              </div>
            </div>
            <Footer />
          </div>
        </QueryClientProvider>
      </ObserverProvider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Product />);
