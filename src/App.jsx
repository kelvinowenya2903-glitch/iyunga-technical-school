import './App.css'
import Academics from './pages/Academics'
import InformationTechnology from './pages/programs/informationTechnology'
import ElectricalEngineering from './pages/programs/electricalEngineering'
import MechanicalEngineering from './pages/programs/mechanicalEngineering.jsx'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (<BrowserRouter>
<Routes>
  <Route path="/" element={
    <>
      
        <Navbar />
      

      <main>

        {/* Hero Section */}
        <section id="home" className=" hero">
          <h1>Welcome to Iyunga Technical School</h1>

          <p>
            Welcome to our official website, we are committed to providing
            quality education and developing responsible future leaders.
          </p>

          <button className="get-btn">Get started</button>
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

            <button>Learn More</button>
          </div>
        </section>

        {/* Why Choose Us Section */}
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
<section id="programs" className="programs">
  <h2>Our Programs</h2>

  <div className="program-container">

    <div className="program-card">
      <h3>Information Technology</h3>
      <p>
        Develop computer, software and digital technology skills
        for the modern world.
      </p>
    </div>

    <div className="program-card">
      <h3>Electrical Engineering</h3>
      <p>
        Gain practical knowledge and technical skills in electrical
        systems and engineering.
      </p>
    </div>

    <div className="program-card">
      <h3>Mechanical Engineering</h3>
      <p>
        Learn practical mechanical skills, engineering principles
        and modern technical practices.
      </p>
    </div>

  </div>
</section>
<section className="gallery">
  <h2>School Highlights</h2>

  <p className="gallery-intro">
    Explore some of the activities, facilities and memorable moments
    from Iyunga Technical School.
  </p>

  <div className="gallery-container">

    <div className="gallery-item">
      <img src="/images/jengo1.png" alt="Iyunga Technical School" />
    </div>

    <div className="gallery-item">
      <img src="/images/jengo2.png" alt="Students at Iyunga Technical School" />
    </div>

    <div className="gallery-item">
      <img src="/images/school3.png" alt="School activities" />
    </div>

  </div>
</section>
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

      <button className="admission-btn">
        Apply Now
      </button>
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
        <p>+255 XXX XXX XXX</p>
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
      <Footer />

            </>
          }
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
element={<ElectricalEngineering/>}
/>
<Route
path="/academics/mechanical-engineering"
element={<MechanicalEngineering/>}
/>
      </Routes>
    </BrowserRouter>
  )
}

export default App