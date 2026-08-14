import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

function InformationTechnology() {
  return (
    <>
      <Navbar />

      <main className="program-detail">

        <section className="program-detail-hero">
          <h1>Information Technology</h1>

          <p>
            Develop modern computer, software, networking and
            digital technology skills for the future.
          </p>
        </section>

        <section className="program-detail-content">

          <h2>About the Program</h2>

          <p>
            The Information Technology program equips students with
            practical and theoretical knowledge in computer systems,
            software development, networking and digital technologies.
          </p>

          <h2>What You Will Learn</h2>

          <div className="program-features">

            <div className="program-feature">
              <span>💻</span>
              <h3>Computer Skills</h3>
              <p>
                Learn essential computer applications and digital tools.
              </p>
            </div>

            <div className="program-feature">
              <span>🌐</span>
              <h3>Networking</h3>
              <p>
                Understand computer networks, communication and connectivity.
              </p>
            </div>

            <div className="program-feature">
              <span>⚙️</span>
              <h3>Software</h3>
              <p>
                Develop knowledge of software, programming and digital systems.
              </p>
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  )
}

export default InformationTechnology;