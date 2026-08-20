import "../../App.css";
import "./ProgramDetails.css";

function MechanicalEngineering() {
  return (
    <main className="program-detail">

      {/* Hero */}
      <section className="program-detail-hero">
        <h1>Mechanical Engineering</h1>

        <p>
          Develop practical engineering skills in machine design,
          manufacturing, maintenance and modern mechanical systems.
        </p>
      </section>


      {/* Main Content */}
      <section className="program-detail-content">

        {/* About */}
        <h2>About the Program</h2>

        <p>
          The Mechanical Engineering program equips students with
          theoretical knowledge and practical skills in mechanical
          systems, machine operation, maintenance, manufacturing
          and engineering practices.
        </p>


        {/* What You Will Learn */}
        <h2>What You Will Learn</h2>

        <div className="program-features">

          <div className="program-feature">
            <span>⚙️</span>

            <h3>Machine Design</h3>

            <p>
              Learn the principles of machine design, mechanical
              components and engineering systems.
            </p>
          </div>


          <div className="program-feature">
            <span>🔧</span>

            <h3>Maintenance</h3>

            <p>
              Develop practical skills in machine maintenance,
              repair and troubleshooting.
            </p>
          </div>


          <div className="program-feature">
            <span>🏭</span>

            <h3>Manufacturing</h3>

            <p>
              Gain knowledge of manufacturing processes, workshop
              practices and modern production techniques.
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
            <span>🛠️</span>

            <h3>Study Mode</h3>

            <p>Full Time</p>
          </div>

        </section>


        {/* Career Opportunities */}
        <section className="career-section">

          <h2>Career Opportunities</h2>

          <div className="career-list">

            <div>⚙️ Mechanical Technician</div>

            <div>🔧 Maintenance Technician</div>

            <div>🏭 Production Technician</div>

            <div>🛠️ Workshop Technician</div>

          </div>

        </section>


        {/* Why Study */}
        <section className="why-study-section">

          <h2>Why Study Mechanical Engineering?</h2>

          <p className="why-study-intro">
            Mechanical Engineering provides students with practical
            engineering skills and technical knowledge needed to work
            with machines, equipment and modern industrial systems.
          </p>


          <div className="why-study-container">

            <div className="why-study-card">

              <div className="why-study-icon">
                ⚙️
              </div>

              <h3>Practical Skills</h3>

              <p>
                Gain hands-on experience with machines, tools,
                equipment and mechanical systems.
              </p>

            </div>


            <div className="why-study-card">

              <div className="why-study-icon">
                🏭
              </div>

              <h3>Industrial Knowledge</h3>

              <p>
                Learn engineering practices that prepare you for
                modern manufacturing and industrial environments.
              </p>

            </div>


            <div className="why-study-card">

              <div className="why-study-icon">
                🚀
              </div>

              <h3>Career Growth</h3>

              <p>
                Develop technical skills that can create opportunities
                in mechanical, manufacturing and maintenance industries.
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
              in Mechanical Engineering at Iyunga Technical School.
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

export default MechanicalEngineering;