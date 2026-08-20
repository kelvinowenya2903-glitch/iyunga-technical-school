import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* About Hero */}
      <section className="about-hero">
        <div>
          <h1>About Iyunga Technical School</h1>
          <p>
            Iyunga Technical School is committed to providing quality
            education, practical skills, technology and innovation
            for a better future.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>

          <p>
            Iyunga Technical School is dedicated to providing quality
            education that combines academic knowledge with practical
            technical skills. We prepare students to confidently face
            the challenges of the modern world.
          </p>

          <p>
            Through various academic and technical programs, students
            have opportunities to learn, practice and develop their
            abilities in technology, innovation and problem-solving.
          </p>
        </div>

        <div className="about-card">
          <h3>Iyunga Technical School</h3>
          <p>
            Education • Skills • Technology • Innovation
          </p>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="mission-section">

        <h2>Our Mission, Vision & Values</h2>

        <div className="mission-grid">

          <div className="mission-card">
            <div className="mission-icon">🎯</div>

            <h3>Our Mission</h3>

            <p>
              To provide quality academic and technical education that
              enables students to become skilled, innovative and
              responsible members of society.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">👁️</div>

            <h3>Our Vision</h3>

            <p>
              To become a leading institution recognized for excellence
              in education, technology and technical training.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">⭐</div>

            <h3>Our Values</h3>

            <p>
              Discipline, integrity, innovation, responsibility,
              hard work and practical learning.
            </p>
          </div>

        </div>

      </section>
            {/* Why Choose Us */}
      <section className="about-why">

        <h2>Why Choose Iyunga Technical School?</h2>

        <p className="about-why-intro">
          We provide an environment where students can learn,
          develop practical skills and prepare for successful careers.
        </p>

        <div className="about-why-grid">

          <div className="about-why-card">
            <div className="about-why-icon">🎓</div>

            <h3>Quality Education</h3>

            <p>
              We provide quality academic education that builds
              strong knowledge and prepares students for their future.
            </p>
          </div>

          <div className="about-why-card">
            <div className="about-why-icon">🔧</div>

            <h3>Practical Training</h3>

            <p>
              Students gain hands-on technical experience that
              prepares them for real-world challenges.
            </p>
          </div>

          <div className="about-why-card">
            <div className="about-why-icon">💡</div>

            <h3>Innovation & Technology</h3>

            <p>
              We encourage creativity, innovation and the use of
              modern technology in learning and problem-solving.
            </p>
          </div>

          <div className="about-why-card">
            <div className="about-why-icon">👥</div>

            <h3>Student Development</h3>

            <p>
              We support students in developing leadership,
              discipline, confidence and responsible citizenship.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default About;