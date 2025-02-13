// import InputField from "./input"

// const ContactForm = () => {
//     return <div>
//         ABV

//         <InputField label='abc' />
//     </div>
// }

// export default ContactForm

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");
  const [sent, setSent] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      await emailjs.send(
        "service_wf0ua7p",
        "template_n47vto1",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        {
          publicKey: "3OzoHyZImQFGH1ULh",
        }
      );

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
      setSent(true);
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      {!sent && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
          <button type="submit">Send</button>
          {status && <p>{status}</p>}
        </form>
      )}
    </div>
  );
};

export default ContactForm;
