import { createLazyRoute } from "@tanstack/react-router";

export const Route = createLazyRoute("/news")({
  component: News,
});

function News() {
  return <div className="news-page-container"></div>;
}
