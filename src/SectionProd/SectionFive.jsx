import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import "./SectionFive.css";

const ProdSectionFive = function () {
  // Initialize form state
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    comments: "",
  });

  // Form success and error states
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: null,
  });

  // Create a mutation that posts formData to your Spring Boot API
  const mutation = useMutation({
    mutationFn: async (newData) => {
      // First, try with standard CORS approach
      try {
        const response = await fetch(
          "https://sensure-api-0d2439647638.herokuapp.com/api/contacts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "text/plain, application/json, */*",
            },
            mode: "cors",
            body: JSON.stringify(newData),
          },
        );

        const text = await response.text();
        if (!response.ok) {
          throw new Error(`Server error: ${text || response.status}`);
        }
        return text;
      } catch (error) {
        console.error("Initial fetch attempt failed:", error);

        // If the standard approach fails, try a backup approach
        // Note: This is a workaround and might not be needed if the server is properly configured
        const backupResponse = await fetch(
          "https://sensure-api-0d2439647638.herokuapp.com/api/contacts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            // Don't specify mode, let browser determine
            body: JSON.stringify(newData),
          },
        );

        const backupText = await backupResponse.text();
        if (!backupResponse.ok) {
          throw new Error(
            `Server error: ${backupText || backupResponse.status}`,
          );
        }
        return backupText;
      }
    },
    onSuccess: () => {
      console.log("Form submitted successfully!");
      setFormStatus({ submitted: true, error: null });
      // Reset form after successful submission
      setFormData({
        name: "",
        organisation: "",
        email: "",
        phone: "",
        comments: "",
      });
    },
    onError: (error) => {
      console.error("Form submission error:", error);
      setFormStatus({
        submitted: false,
        error:
          error.message || "Failed to submit the form. Please try again later.",
      });
    },
  });

  // Handle input changes by updating state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear any previous success/error messages when user starts typing again
    if (formStatus.submitted || formStatus.error) {
      setFormStatus({ submitted: false, error: null });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="section-five">
      <div className="section-five-title intersect-once intersect:motion-preset-rebound-right motion-delay-0">
        Join the study. Share your experience.
      </div>
      <div className="section-five-subtitle intersect-once intersect:motion-preset-rebound-right motion-delay-100">
        Help redefine how we teach and learn. Fill in the form to show your
        interest!
      </div>
      <div className="section-five-content intersect-once intersect:motion-preset-expand motion-delay-200">
        {formStatus.submitted ? (
          <div className="form-success-message">
            <h3>Thank you for your submission!</h3>
            <p>We've received your information and will be in touch soon.</p>
            <button
              type="button"
              onClick={() => setFormStatus({ submitted: false, error: null })}
            >
              Submit another message
            </button>
          </div>
        ) : (
          <form className="section-five-left" onSubmit={handleSubmit}>
            <div className="section-five-name">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Smith"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="section-five-org">
              <label htmlFor="organisation">Organisation:</label>
              <input
                id="organisation"
                type="text"
                name="organisation"
                placeholder="ABC Inc."
                value={formData.organisation}
                onChange={handleChange}
              />
            </div>
            <div className="section-five-email">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="jsmith@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="section-five-phone">
              <label htmlFor="phone">Phone:</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+6123456789"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="section-five-comm">
              <label htmlFor="comments">Comments:</label>
              <textarea
                id="comments"
                name="comments"
                placeholder="I love sensure!"
                value={formData.comments}
                onChange={handleChange}
                rows="4"
              />
            </div>

            {formStatus.error && (
              <div className="form-error-message">
                Error: {formStatus.error}. Please try again later.
              </div>
            )}

            <button
              className="submit-button"
              type="submit"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
        <div className="section-five-right">
          <img
            src="https://d3bhvpql1mmbm1.cloudfront.net/img2.jpg"
            alt="books"
          />
        </div>
      </div>
    </div>
  );
};

export default ProdSectionFive;
