import "./App.css";

import Academics from "./pages/Academics";
import InformationTechnology from "./pages/programs/informationTechnology";
import ElectricalEngineering from "./pages/programs/electricalEngineering";
import MechanicalEngineering from "./pages/programs/mechanicalEngineering.jsx";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact.jsx";
import Register from "./pages/Register";
import Students from "./pages/Students";
import StaffLogin from "./pages/StaffLogin";
import StaffDashboard from "./pages/StaffDashboard";
import PublicLayout from "./pages/PublicLayout";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section id="home" className="hero">

        <h1>Welcome to Iyunga Technical School</h1>

        <p>
          Welcome to our official website. We are committed to providing
          quality education and developing responsible future leaders.
        </p>

        <Link to="/academics" className="get-btn">
          Get Started
        </Link>

      </section>


      {/* About Section */}
      <section id="about" className="about">

        <div className="about-content">

          <h2>About Our School</h2>

          <p>
            Iyunga Technical School is committed to providing quality
            education and practical technical skills that prepare students
            for their future careers and responsible citizenship.
          </p>

          <p>
            Our school provides a supportive learning environment where
            students can develop their academic knowledge, technical
            abilities, creativity, and leadership skills.
          </p>

        </div>

      </section>


      {/* Why Choose Us */}
      <section className="why-us">

        <h2>Why Choose Our School?</h2>

        <div className="why-container">

          <div className="why-card">
            <div className="why-icon">🎓</div>

            <h3>Quality Education</h3>

            <p>
              We provide a comprehensive curriculum that prepares students
              for success in their chosen fields.
            </p>
          </div>


          <div className="why-card">
            <div className="why-icon">🔧</div>

            <h3>Technical Skills</h3>

            <p>
              Students gain practical technical skills that prepare them
              for real-world challenges and career opportunities.
            </p>
          </div>


          <div className="why-card">
            <div className="why-icon">👑</div>

            <h3>Strong Leadership</h3>

            <p>
              We encourage discipline, creativity and leadership to help
              students become responsible future leaders.
            </p>
          </div>

        </div>

      </section>


      {/* Programs */}
      <section id="programs" className="programs">

        <h2>Our Programs</h2>

        <div className="program-container">

          <Link
            to="/academics/information-technology"
            className="program-card"
          >
            <h3>Information Technology</h3>

            <p>
              Develop computer, software and digital technology skills
              for the modern world.
            </p>

            <span>Learn More →</span>
          </Link>


          <Link
            to="/academics/electrical-engineering"
            className="program-card"
          >
            <h3>Electrical Engineering</h3>

            <p>
              Gain practical knowledge and technical skills in electrical
              systems and engineering.
            </p>

            <span>Learn More →</span>
          </Link>


          <Link
            to="/academics/mechanical-engineering"
            className="program-card"
          >
            <h3>Mechanical Engineering</h3>

            <p>
              Learn practical mechanical skills, engineering principles
              and modern technical practices.
            </p>

            <span>Learn More →</span>
          </Link>

        </div>

      </section>


      {/* Gallery */}
      <section className="gallery">

        <h2>School Highlights</h2>

        <p className="gallery-intro">
          Explore some of the activities, facilities and memorable moments
          from Iyunga Technical School.
        </p>

        <div className="gallery-container">

          <div className="gallery-item">
            <img
              src="/images/jengo1.png"
              alt="Iyunga Technical School"
            />
          </div>

          <div className="gallery-item">
            <img
              src="/images/jengo2.png"
              alt="Students at Iyunga Technical School"
            />
          </div>

          <div className="gallery-item">
            <img
              src="/images/school3.png"
              alt="School activities"
            />
          </div>

        </div>

      </section>


      {/* Admissions */}
      <section id="admissions" className="admissions">

        <div className="admissions-content">

          <div className="admissions-text">

            <h2>Admissions</h2>

            <p>
              Join Iyunga Technical School and become part of a learning
              community focused on academic excellence, technical skills
              and personal development.
            </p>

            <p>
              We welcome students who are ready to learn, develop practical
              skills and prepare for their future careers.
            </p>

            <Link
              to="/admissions"
              className="admission-btn"
            >
              Apply Now
            </Link>

          </div>


          <div className="admissions-info">

            <h3>Admission Information</h3>

            <p>📌 Application Requirements</p>
            <p>📌 Available Programs</p>
            <p>📌 Admission Procedures</p>
            <p>📌 Important Dates</p>

          </div>

        </div>

      </section>


      {/* Contact */}
      <section id="contact" className="contact">

        <h2>Contact Us</h2>

        <p className="contact-intro">
          Have questions or need more information? Get in touch with
          Iyunga Technical School.
        </p>

        <div className="contact-container">

          <div className="contact-info">

            <div className="contact-item">
              <h3>📍 Address</h3>
              <p>Iyunga, Mbeya, Tanzania</p>
            </div>

            <div className="contact-item">
              <h3>📞 Phone</h3>
              <p>+255 670 723 266</p>
            </div>

            <div className="contact-item">
              <h3>✉️ Email</h3>
              <p>info@iyungatechnical.ac.tz</p>
            </div>

          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Public Website */}
        <Route element={<PublicLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/students"
            element={<Students />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/academics"
            element={<Academics />}
          />

          <Route
            path="/academics/information-technology"
            element={<InformationTechnology />}
          />

          <Route
            path="/academics/electrical-engineering"
            element={<ElectricalEngineering />}
          />

          <Route
            path="/academics/mechanical-engineering"
            element={<MechanicalEngineering />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/admissions"
            element={<Admissions />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Route>


        {/* Staff System */}
        <Route
          path="/staff-login"
          element={<StaffLogin />}
        />

        <Route
          path="/staff-dashboard"
          element={<StaffDashboard />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;