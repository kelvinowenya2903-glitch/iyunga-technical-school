import "./Admissions.css";

function Admissions() {
  return (
    <div className="admissions-page">

      {/* Admissions Hero */}
      <section className="admissions-hero">
        <div>
          <h1>Admissions</h1>

          <p>
            Start your journey at Iyunga Technical School and build
            the skills you need for your future.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="admissions-intro">

        <h2>Join Iyunga Technical School</h2>

        <p>
          We welcome students who are passionate about learning,
          technology, innovation and technical skills. Our admission
          process is designed to provide students with an opportunity
          to join a supportive and practical learning environment.
        </p>

      </section>

      {/* Admission Requirements */}
      <section className="requirements-section">

        <h2>Admission Requirements</h2>

        <div className="requirements-grid">

          <div className="requirement-card">
            <div className="requirement-icon">📄</div>

            <h3>Academic Documents</h3>

            <p>
              Applicants should provide the required academic
              certificates and examination results.
            </p>
          </div>

          <div className="requirement-card">
            <div className="requirement-icon">🪪</div>

            <h3>Identification</h3>

            <p>
              Applicants should provide valid identification
              documents as required during the admission process.
            </p>
          </div>

          <div className="requirement-card">
            <div className="requirement-icon">📝</div>

            <h3>Application Form</h3>

            <p>
              Complete the official admission application form
              with accurate personal and academic information.
            </p>
          </div>

        </div>

      </section>

      {/* Admission Process */}
      <section className="admission-process">

        <h2>Admission Process</h2>

        <div className="process-grid">

          <div className="process-card">
            <span>01</span>

            <h3>Check Requirements</h3>

            <p>
              Review the admission requirements before submitting
              your application.
            </p>
          </div>

          <div className="process-card">
            <span>02</span>

            <h3>Submit Application</h3>

            <p>
              Complete and submit the required admission
              application documents.
            </p>
          </div>

          <div className="process-card">
            <span>03</span>

            <h3>Application Review</h3>

            <p>
              The school reviews the submitted information and
              determines eligibility.
            </p>
          </div>

          <div className="process-card">
            <span>04</span>

            <h3>Admission Confirmation</h3>

            <p>
              Successful applicants receive information about
              the next steps for joining the school.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="admission-cta">

        <h2>Ready to Join Us?</h2>

        <p>
          Take the first step towards a brighter future through
          quality technical education.
        </p>

        <button>Apply Now</button>

      </section>

    </div>
  );
}

export default Admissions;