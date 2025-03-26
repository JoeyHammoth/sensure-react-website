import { createLazyRoute } from "@tanstack/react-router";

export const Route = createLazyRoute("/about")({
  component: About,
});

function About() {
  return <div className="about-page-container"></div>;
}
