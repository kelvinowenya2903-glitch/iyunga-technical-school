import "../../App.css";
import "./ProgramDetails.css";

function ElectricalEngineering() {
  return (
    <main className="program-detail">

      {/* Hero */}
      <section className="program-detail-hero">
        <h1>Electrical Engineering</h1>

        <p>
          Develop practical knowledge and technical skills in
          electrical systems, electronics and engineering.
        </p>
      </section>


      {/* Main Content */}
      <section className="program-detail-content">

        <h2>About the Program</h2>

        <p>
          The Electrical Engineering program provides students with
          theoretical knowledge and practical skills in electrical
          systems, electronics, installation, maintenance and
          engineering practices.
        </p>


        {/* What You Will Learn */}
        <h2>What You Will Learn</h2>

        <div className="program-features">

          <div className="program-feature">
            <span>⚡</span>
            <h3>Electrical Systems</h3>
            <p>
              Learn how electrical systems work and how they are
              designed, installed and maintained.
            </p>
          </div>

          <div className="program-feature">
            <span>🔌</span>
            <h3>Electronics</h3>
            <p>
              Develop practical knowledge of electronic components,
              circuits and systems.
            </p>
          </div>

          <div className="program-feature">
            <span>🛠️</span>
            <h3>Practical Skills</h3>
            <p>
              Gain hands-on experience in electrical installation,
              maintenance and troubleshooting.
            </p>
          </div>

        </div>


        {/* Program Information */}
        <h2>Program Information</h2>

        <div className="program-info">

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
            <span>🛠️</span>
            <h3>Study Mode</h3>
            <p>Full Time</p>
          </div>

        </div>


        {/* Career Opportunities */}
        <section className="career-section">

          <h2>Career Opportunities</h2>

          <div className="career-list">

            <div>⚡ Electrical Technician</div>

            <div>🔧 Electrical Installer</div>

            <div>🛠️ Maintenance Technician</div>

            <div>🔌 Electronics Technician</div>

          </div>

        </section>
<section className="why-study-section">

  <h2>Why Study Electrical Engineering?</h2>

  <p className="why-study-intro">
    Electrical Engineering provides students with practical skills,
    technical knowledge and career opportunities in a wide range of
    electrical and engineering fields.
  </p>

  <div className="why-study-container">

    <div className="why-study-card">
      <div className="why-study-icon">💡</div>

      <h3>Practical Knowledge</h3>

      <p>
        Gain hands-on experience with electrical systems, equipment,
        installation and maintenance.
      </p>
    </div>

    <div className="why-study-card">
      <div className="why-study-icon">🚀</div>

      <h3>Career Opportunities</h3>

      <p>
        Develop skills that can open opportunities in electrical,
        electronics and technical industries.
      </p>
    </div>

    <div className="why-study-card">
      <div className="why-study-icon">🛡️</div>

      <h3>Industry Skills</h3>

      <p>
        Learn professional skills that help you work safely and
        effectively in real-world engineering environments.
      </p>
    </div>

  </div>

</section>
<section className="program-cta">

  <div className="program-cta-content">

    <span className="cta-icon">🎓</span>

    <h2>Ready to Start Your Journey?</h2>

    <p>
      Take the first step towards building your future in
      Electrical Engineering at Iyunga Technical School.
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

export default ElectricalEngineering;