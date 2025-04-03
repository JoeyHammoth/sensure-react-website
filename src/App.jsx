/*
 * The main root of the Sensure website project.
 *
 *
 * */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home.jsx"; // New homepage component
import Product from "./Pages/Product.jsx";
import ScrollToTop from "./Util/ScrollToTop.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ObserverProvider from "./Miscellaneous/ObserverProvider.tsx";
import "./App.css";

const queryClient = new QueryClient();

const App = function () {
  return (
    <StrictMode>
      <BrowserRouter>
        <ScrollToTop />
        <ObserverProvider>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
            </Routes>
          </QueryClientProvider>
        </ObserverProvider>
      </BrowserRouter>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
