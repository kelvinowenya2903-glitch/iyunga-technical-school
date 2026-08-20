import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* Contact Hero */}
      <section className="contact-hero">
        <div>
          <h1>Contact Us</h1>

          <p>
            Get in touch with Iyunga Technical School.
            We are ready to assist you with your questions and inquiries.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-section">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            If you have any questions about our school, academic
            programs, admissions or other services, feel free to
            contact us through the information below.
          </p>

          <div className="contact-item">
            <span>📍</span>

            <div>
              <h3>Address</h3>
              <p>Iyunga, Mbeya, Tanzania</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📞</span>

            <div>
              <h3>Phone</h3>
              <p>+255 670 723 266</p>
            </div>
          </div>

          <div className="contact-item">
            <span>✉️</span>

            <div>
              <h3>Email</h3>
              <p>info@iyungatechnical.ac.tz</p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="contact-form">

          <h2>Send Us a Message</h2>

          <form>

            <div className="form-group">
              <label htmlFor="name">Full Name</label>

              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>

              <input
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>

              <input
                type="text"
                id="subject"
                placeholder="Enter subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                rows="6"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

      {/* Location */}
      <section className="location-section">

        <h2>Find Us</h2>

        <div className="location-box">
          <p>Iyunga Technical School</p>
          <p>Mbeya, Tanzania</p>
        </div>

      </section>

    </div>
  );
}

export default Contact;