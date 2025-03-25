/*
* The main root of the Sensure website project.
*
*
* */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Intro from "./Miscellaneous/Intro.jsx";
import Header from "./Miscellaneous/Header.jsx";
import SectionOne from "./Sections/SectionOne.jsx";
import SectionTwo from "./Sections/SectionTwo.jsx";
import SectionThree from "./Sections/SectionThree.jsx";
import SectionFour from "./Sections/SectionFour.jsx";
import SectionFive from "./Sections/SectionFive.jsx";
import Footer from "./Miscellaneous/Footer.jsx";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import "./App.css";

import ObserverProvider from "./Miscellaneous/ObserverProvider.tsx";

const queryClient = new QueryClient();

const App = function () {
    return (
        <StrictMode>
            <ObserverProvider>
                <QueryClientProvider client={queryClient}>
                    <Intro className="introduction" />
                    <div className="main-container">
                        <Header />
                        <div className="white-bg">
                            <div className="body">
                                <div className="header-gap"></div>
                                <SectionOne className="section-one intersect:motion-preset-fade" />
                            </div>
                        </div>
                        <img className="image-one motion-preset-expand" src="https://d3bhvpql1mmbm1.cloudfront.net/img13.png" alt="Doctor" />
                        <div className="spacer waves lowish-margin"></div>
                        <div className="grey-bg">
                            <div className="body">
                                <SectionTwo className="intersect:motion-preset-fade" />
                            </div>
                        </div>
                        <div className="spacer waves-rev"></div>
                        <div className="white-bg">
                            <div className="body">
                                <SectionThree className="intersect:motion-preset-fade" />
                            </div>
                        </div>
                        <div className="spacer-crop waves-cropped"></div>
                        <div className="grey-bg">
                            <div className="body">
                                <SectionFour className="intersect:motion-preset-fade" />
                            </div>
                        </div>
                        <div className="spacer waves-rev"></div>
                        <div className="white-bg">
                            <div className="body">
                                <SectionFive className="intersect:motion-preset-fade" />
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
root.render(<App />);