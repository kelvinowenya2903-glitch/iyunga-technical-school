import {Link} from "react-router-dom"

function Academics() {
  return (
    <>
  
    <div className="academics-page">

      <section className="academics-hero">
        <h1>Academics</h1>

        <p>
          Discover quality academic and technical education
          at Iyunga Technical School.
        </p>
      </section>

      <section className="academic-programs">

        <h2>Our Academic Programs</h2>

        <p className="academic-intro">
          Our programs combine academic knowledge with practical
          technical skills to prepare students for their future careers.
        </p>
<div className="academic-container">

        <div className="academic-card">
 <div className="academic-icon">💻</div>
            <h3>Information Technology</h3>

            <p>
              Students develop computer, software, networking and
              digital technology skills for the modern world.
            </p>

           <Link
  to="/academics/information-technology"
  className="academic-card-btn"
>
  Learn More
</Link>
          </div>

          <div className="academic-card">
            <div className="academic-icon">⚡</div>
            <h3>Electrical Engineering</h3>

            <p>
              Students gain practical knowledge in electrical systems,
              electronics and engineering practices.
            </p>

            <Link  to="/academics/electrical-engineering"
  className="academic-card-btn"
>
  Learn More
</Link>
          </div>

          <div className="academic-card">
            <div className="academic-icon">⚙️</div>
            <h3>Mechanical Engineering</h3>

            <p>
              Students learn mechanical principles, practical skills
              and modern engineering techniques.
            </p>

            <Link to="/academics/mechanical-engineering"
            className="academic-card-btn">
              Learn More
            </Link>
          </div>

        </div>
      </section>

      <section className="learning-environment">

        <h2>Learning Environment</h2>

        <p>
          Iyunga Technical School provides a supportive learning
          environment where students can develop academic knowledge,
          technical abilities, creativity and leadership skills.
        </p>

      </section>

    </div>
    
    
    </>
  )
}

export default Academics