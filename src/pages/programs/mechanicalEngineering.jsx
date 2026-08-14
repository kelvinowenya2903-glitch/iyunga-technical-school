import "../../App.css"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

function MechanicalEngineering() {
  return (
    <>
      <Navbar />

      <main className="program-detail">

        <section className="program-detail-hero">
          <h1>Mechanical Engineering</h1>

          <p>
            Develop practical mechanical skills, engineering knowledge
            and modern technical abilities for the future.
          </p>
        </section>

        <section className="program-detail-content">

          <h2>About the Program</h2>

          <p>
            The Mechanical Engineering program provides students with
            theoretical knowledge and practical skills in mechanical
            systems, machines, tools and modern engineering practices.
          </p>

          <h2>What You Will Learn</h2>

          <div className="program-features">

            <div className="program-feature">
              <span>⚙️</span>
              <h3>Mechanical Systems</h3>
              <p>
                Learn how machines and mechanical systems work,
                operate and are maintained.
              </p>
            </div>

            <div className="program-feature">
              <span>🔧</span>
              <h3>Machine Tools</h3>
              <p>
                Develop practical skills in using tools and equipment
                for mechanical work.
              </p>
            </div>

            <div className="program-feature">
              <span>🛠️</span>
              <h3>Practical Engineering</h3>
              <p>
                Gain hands-on experience in mechanical maintenance,
                fabrication and engineering practices.
              </p>
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  )
}

export default MechanicalEngineering;