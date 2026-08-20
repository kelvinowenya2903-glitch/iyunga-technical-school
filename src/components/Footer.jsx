import  "./Footer.css";
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h3>Iyunga Technical School</h3>

          <p>
            Providing quality education and practical technical skills
            for a better future.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/#about">About Us</a>
          <a href="/academics">Academics</a>
          <a href="/#admissions">Admissions</a>
          <a href="/#contact">Contact Us</a>
          <a href="/#register">Register</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>📍 Iyunga, Mbeya, Tanzania</p>
          <p>📞 +255 670 327 266</p>
          <p>✉️ info@iyungatechnical.ac.tz</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2026 Iyunga Technical School. All rights reserved.
        </p>
      </div>

    </footer>
  )
}

export default Footer