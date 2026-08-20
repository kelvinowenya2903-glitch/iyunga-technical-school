import "./Register.css";

function Register() {
  return (
    <main className="register-page">

      {/* Hero */}
      <section className="register-hero">
        <div className="register-hero-content">
          <span>STUDENT PORTAL</span>

          <h1>Create Your Account</h1>

          <p>
            Register for an Iyunga Technical School student account
            to access online academic services.
          </p>
        </div>
      </section>

      {/* Register Form */}
      <section className="register-section">
        <div className="register-container">

          <div className="register-heading">
            <span>STUDENT REGISTRATION</span>

            <h2>Student Registration Form</h2>

            <p>
              Please fill in the information below to create your
              student account.
            </p>
          </div>

          <form className="register-form">

            <div className="register-row">

              <div className="register-group">
                <label>Full Name</label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>
          
            </div>

            <div className="register-row">

              <div className="register-group">
                <label>Date of Birth</label>

                <input
                  type="date"
                  required
                />
              </div>

              <div className="register-group">
                <label>Gender</label>

                <select required>
                  <option value="">
                    Select gender
                  </option>

                  <option value="male">
                    Male
                  </option>

                  <option value="female">
                    Female
                  </option>
                </select>
              </div>

            </div>

            <div className="register-row">

              <div className="register-group">
                <label>Programme / Class</label>

                <input
                  type="text"
                  placeholder="Enter programme or class"
                  required
                />
              </div>

              <div className="register-group">
                <label>Phone Number</label>

                <input
                  type="tel"
                  placeholder="Enter phone number"
                  required
                />
              </div>
{/* Parent / Guardian Information */}

<div className="register-form-section">

  <h3>Parent / Guardian Information</h3>

  <div className="register-row">

    <div className="register-group">
      <label>Father's Full Name</label>

      <input
        type="text"
        placeholder="Enter father's full name"
      />
    </div>

    <div className="register-group">
      <label>Father's Phone Number</label>

      <input
        type="tel"
        placeholder="Enter father's phone number"
      />
    </div>

  </div>

  <div className="register-row">

    <div className="register-group">
      <label>Mother's Full Name</label>

      <input
        type="text"
        placeholder="Enter mother's full name"
      />
    </div>

    <div className="register-group">
      <label>Mother's Phone Number</label>

      <input
        type="tel"
        placeholder="Enter mother's phone number"
      />
    </div>

  </div>

  <div className="register-row">

    <div className="register-group">
      <label>Guardian's Full Name</label>

      <input
        type="text"
        placeholder="Enter guardian's full name"
      />
    </div>

    <div className="register-group">
      <label>Guardian's Phone Number</label>

      <input
        type="tel"
        placeholder="Enter guardian's phone number"
      />
    </div>

  </div>

  <div className="register-row">

    <div className="register-group">
      <label>Relationship to Student</label>

      <select>
        <option value="">Select relationship</option>
        <option value="father">Father</option>
        <option value="mother">Mother</option>
        <option value="guardian">Guardian</option>
        <option value="relative">Relative</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div className="register-group">
      <label>Home Address</label>

      <input
        type="text"
        placeholder="Enter home address"
      />
    </div>

  </div>

</div>
            </div>

            <div className="register-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="register-row">

              <div className="register-group">
                <label>Password</label>

                <input
                  type="password"
                  placeholder="Create a password"
                  required
                />
              </div>

              <div className="register-group">
                <label>Confirm Password</label>

                <input
                  type="password"
                  placeholder="Confirm your password"
                  required
                />
              </div>

            </div>

  
            <button
              type="submit"
              className="register-button"
            >
              Register Here
            </button>

          </form>

          <p className="register-login-text">
            Already have an account?
            <a href="/login"> Login here</a>
          </p>

        </div>
      </section>

    </main>
  );
}

export default Register;