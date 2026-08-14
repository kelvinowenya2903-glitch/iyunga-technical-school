import "../../App.css"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
function ElectricalEngineering() {
  return (
    <>
      <Navbar />

      <main className="program-detail">

        <section className="program-detail-hero">
          <h1>Electrical Engineering</h1>

          <p>
            Develop practical knowledge and technical skills in
            electrical systems, electronics and engineering.
          </p>
        </section>

        <section className="program-detail-content">

          <h2>About the Program</h2>

          <p>
            The Electrical Engineering program provides students with
            theoretical knowledge and practical skills in electrical
            systems, electronics, installation, maintenance and
            engineering practices.
          </p>

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

        </section>

      </main>

      <Footer />
    </>
  )
}

export default ElectricalEngineering;