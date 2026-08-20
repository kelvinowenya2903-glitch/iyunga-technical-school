import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./StaffDashboard.css";

function StaffDashboard() {
  const navigate = useNavigate();
useEffect(() => {
  const isLoggedIn = localStorage.getItem("staffLoggedIn");

  if (isLoggedIn !== "true") {
    navigate("/staff-login");
  }
}, [navigate]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("staffLoggedIn");
    navigate("/staff-login");
  };

  return (
    <div className="staff-dashboard">

      {/* Sidebar */}
      <aside className={`staff-sidebar ${sidebarOpen ? "open" : ""}`}>

        <div className="sidebar-brand">
          <div className="sidebar-logo">
            ITS
          </div>

          <div>
            <h2>Iyunga</h2>
            <p>Technical School</p>
          </div>
        </div>

        <nav className="sidebar-nav">

          <Link
            to="/staff-dashboard"
            className="sidebar-link active"
            onClick={() => setSidebarOpen(false)}
          >
            <span>📊</span>
            Dashboard
          </Link>

          <Link
            to="/students"
            className="sidebar-link"
            onClick={() => setSidebarOpen(false)}
          >
            <span>👨‍🎓</span>
            Students
          </Link>

          <Link
            to="/admissions"
            className="sidebar-link"
            onClick={() => setSidebarOpen(false)}
          >
            <span>📝</span>
            Admissions
          </Link>

          <Link
            to="/academics"
            className="sidebar-link"
            onClick={() => setSidebarOpen(false)}
          >
            <span>📚</span>
            Academics
          </Link>

        </nav>

        <div className="sidebar-bottom">

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            <span>🚪</span>
            Logout
          </button>

        </div>

      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="dashboard-main">

        <header className="dashboard-header">

          <button
            className="menu-btn"
            onClick={() =>
              setSidebarOpen(!sidebarOpen)
            }
          >
            ☰
          </button>

          <div>
            <h1>Dashboard</h1>

            <p>
              Welcome to Iyunga Technical School
              Staff Management System.
            </p>
          </div>

          <div className="staff-profile">
            <div className="staff-avatar">
              A
            </div>

            <div>
              <strong>Administrator</strong>
              <span>Staff</span>
            </div>
          </div>

        </header>

        {/* Statistics */}
        <section className="dashboard-stats">

          <div className="dashboard-stat-card">

            <div className="dashboard-stat-icon">
              👨‍🎓
            </div>

            <div>
              <span>Total Students</span>
              <h2>4</h2>
            </div>

          </div>

          <div className="dashboard-stat-card">

            <div className="dashboard-stat-icon">
              📝
            </div>

            <div>
              <span>Applications</span>
              <h2>0</h2>
            </div>

          </div>

          <div className="dashboard-stat-card">

            <div className="dashboard-stat-icon">
              📚
            </div>

            <div>
              <span>Courses</span>
              <h2>3</h2>
            </div>

          </div>

          <div className="dashboard-stat-card">

            <div className="dashboard-stat-icon">
              🟢
            </div>

            <div>
              <span>System Status</span>
              <h2>Active</h2>
            </div>

          </div>

        </section>

        {/* Quick Actions */}
        <section className="dashboard-section">

          <div className="section-heading">
            <div>
              <h2>Quick Actions</h2>

              <p>
                Quickly access common staff tasks.
              </p>
            </div>
          </div>

          <div className="quick-actions">

            <Link
              to="/students"
              className="quick-action-card"
            >
              <div className="quick-action-icon">
                👨‍🎓
              </div>

              <div>
                <h3>Manage Students</h3>

                <p>
                  Add, edit, view and manage
                  registered students.
                </p>
              </div>

              <span className="action-arrow">
                →
              </span>
            </Link>

            <Link
              to="/admissions"
              className="quick-action-card"
            >
              <div className="quick-action-icon">
                📝
              </div>

              <div>
                <h3>Admissions</h3>

                <p>
                  Review and manage student
                  admission applications.
                </p>
              </div>

              <span className="action-arrow">
                →
              </span>
            </Link>

            <Link
              to="/academics"
              className="quick-action-card"
            >
              <div className="quick-action-icon">
                📚
              </div>

              <div>
                <h3>Academic Programs</h3>

                <p>
                  View available academic
                  programs and courses.
                </p>
              </div>

              <span className="action-arrow">
                →
              </span>
            </Link>

          </div>

        </section>

        {/* System Information */}
        <section className="dashboard-section">

          <div className="section-heading">
            <div>
              <h2>System Information</h2>

              <p>
                Overview of the staff management
                system.
              </p>
            </div>
          </div>

          <div className="system-info-card">

            <div className="system-info-item">
              <span>School</span>
              <strong>
                Iyunga Technical School
              </strong>
            </div>

            <div className="system-info-item">
              <span>Academic Year</span>
              <strong>2026</strong>
            </div>

            <div className="system-info-item">
              <span>Logged in as</span>
              <strong>Administrator</strong>
            </div>

            <div className="system-info-item">
              <span>System Status</span>
              <strong className="system-active">
                ● Active
              </strong>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default StaffDashboard;