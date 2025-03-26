import { createLazyRoute } from "@tanstack/react-router";

export const Route = createLazyRoute("/contact")({
  component: Contact,
});

function Contact() {
  return <div className="contact-page-container"></div>;
}
