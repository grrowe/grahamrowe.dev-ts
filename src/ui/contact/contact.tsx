import ContactForm from "../components/contactForm";
import "./contact.css";

function Home() {
  return (
    <>
      <div id="contactWrapper">
        <div className="contactCopy">
          <h3>Let's get in Touch</h3>
          <p>
            Have a project in mind? Like to hire me? I'd love to
            hear from you! Feel free to reach out using the form to the side, or drop
            me an email directly at <a href="mailto:grahamrowedev@gmail.com">grahamrowedev@gmail.com</a>. Looking forward to
            connecting!
          </p>
        </div>
        <div className="contactForm">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default Home;
