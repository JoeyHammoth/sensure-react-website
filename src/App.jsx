/*
 * The main root of the Sensure website project.
 *
 *
 * */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

import ObserverProvider from "./Miscellaneous/ObserverProvider.tsx";

const queryClient = new QueryClient();
const router = createRouter({ routeTree });

const App = function () {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
