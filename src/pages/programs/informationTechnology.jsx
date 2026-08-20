import "../../App.css";
import "./ProgramDetails.css";

function InformationTechnology() {
  return (
    <main className="program-detail">

      {/* Hero */}
      <section className="program-detail-hero">
        <h1>Information Technology</h1>

        <p>
          Develop modern skills in computer systems, software,
          networking and digital technologies for the future.
        </p>
      </section>


      {/* Main Content */}
      <section className="program-detail-content">

        {/* About */}
        <h2>About the Program</h2>

        <p>
          The Information Technology program equips students with
          practical and theoretical knowledge in computer systems,
          software development, networking, databases and modern
          digital technologies.
        </p>


        {/* What You Will Learn */}
        <h2>What You Will Learn</h2>

        <div className="program-features">

          <div className="program-feature">
            <span>💻</span>

            <h3>Computer Skills</h3>

            <p>
              Develop essential computer skills and learn how to use
              modern digital applications and technologies.
            </p>
          </div>


          <div className="program-feature">
            <span>🌐</span>

            <h3>Networking</h3>

            <p>
              Learn how computer networks operate, including network
              configuration, communication and connectivity.
            </p>
          </div>


          <div className="program-feature">
            <span>💾</span>

            <h3>Software & Programming</h3>

            <p>
              Gain knowledge of programming, software development
              and digital systems.
            </p>
          </div>

        </div>


        {/* Program Information */}
        <section className="program-info">

          <div className="info-box">
            <span>⏱️</span>

            <h3>Duration</h3>

            <p>3 Years</p>
          </div>


          <div className="info-box">
            <span>🎓</span>

            <h3>Level</h3>

            <p>Technical Education</p>
          </div>


          <div className="info-box">
            <span>💻</span>

            <h3>Study Mode</h3>

            <p>Full Time</p>
          </div>

        </section>


        {/* Career Opportunities */}
        <section className="career-section">

          <h2>Career Opportunities</h2>

          <div className="career-list">

            <div>💻 IT Support Technician</div>

            <div>🌐 Network Technician</div>

            <div>👨‍💻 Software Developer</div>

            <div>🗄️ Database Assistant</div>

          </div>

        </section>


        {/* Why Study */}
        <section className="why-study-section">

          <h2>Why Study Information Technology?</h2>

          <p className="why-study-intro">
            Information Technology provides students with practical
            digital skills and knowledge that are highly valuable
            in today's technology-driven world.
          </p>


          <div className="why-study-container">

            <div className="why-study-card">

              <div className="why-study-icon">
                🚀
              </div>

              <h3>Future Opportunities</h3>

              <p>
                Develop technology skills that can create opportunities
                in the growing digital and technology industry.
              </p>

            </div>


            <div className="why-study-card">

              <div className="why-study-icon">
                🧠
              </div>

              <h3>Problem Solving</h3>

              <p>
                Improve logical thinking, creativity and problem-solving
                skills through technology and programming.
              </p>

            </div>


            <div className="why-study-card">

              <div className="why-study-icon">
                🌍
              </div>

              <h3>Digital World</h3>

              <p>
                Gain skills that prepare you to work and innovate
                in the modern digital environment.
              </p>

            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="program-cta">

          <div className="program-cta-content">

            <span className="cta-icon">
              🎓
            </span>

            <h2>Ready to Start Your Journey?</h2>

            <p>
              Take the first step towards building your future
              in Information Technology at Iyunga Technical School.
            </p>

            <button className="program-apply-btn">
              Apply Now <span>→</span>
            </button>

          </div>

        </section>

      </section>

    </main>
  );
}

export default InformationTechnology;