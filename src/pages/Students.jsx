import { useState, useEffect } from "react";
import "./Students.css";

function Students() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("All Courses");
  
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [viewingStudent, setViewingStudent] = useState(null);
const [selectedGender, setSelectedGender] = useState("All Genders");
  const defaultStudents = [
    {
      id: 1,
      registrationNumber: "ITS/2026/001",
      fullName: "John Peter",
      gender: "Male",
      course: "Information Technology",
      email: "john@example.com",
      phone: "0712345678",
      status:"Active"
    },
    {
      id: 2,
      registrationNumber: "ITS/2026/002",
      fullName: "Mary Joseph",
      gender: "Female",
      course: "Electrical Engineering",
      email: "mary@example.com",
      phone: "0756789012",
 status:"Active"
    },
    {
      id: 3,
      registrationNumber: "ITS/2026/003",
      fullName: "David Michael",
      gender: "Male",
      course: "Mechanical Engineering",
      email: "david@example.com",
      phone: "0765432109",
 status:"Active"
    },
    {
      id: 4,
      registrationNumber: "ITS/2026/004",
      fullName: "Sarah James",
      gender: "Female",
      course: "Information Technology",
      email: "sarah@example.com",
      phone: "0787654321",
 status:"Active"
    },
  ];

  const [students, setStudents] = useState(() => {
  const savedStudents = localStorage.getItem("students");

  if (savedStudents) {
    const parsedStudents = JSON.parse(savedStudents);

    return parsedStudents.map((student) => ({
      ...student,
      status: student.status || "Active",
    }));
  }

  return defaultStudents;
});

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const [formData, setFormData] = useState({
    registrationNumber: "",
    fullName: "",
    gender: "",
    course: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add / Update Student
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingStudent) {
      setStudents(
        students.map((student) =>
          student.id === editingStudent.id
            ? {
                ...student,
                ...formData,
              }
            : student
        )
      );
    } else {
      const newStudent = {
        id:
          students.length > 0
            ? Math.max(...students.map((student) => student.id)) + 1
            : 1,
        ...formData,
      };

      setStudents([...students, newStudent]);
    }

    resetForm();
  };

  // Edit Student
  const handleEdit = (student) => {
    setEditingStudent(student);

    setFormData({
      registrationNumber: student.registrationNumber,
      fullName: student.fullName,
      gender: student.gender,
      course: student.course,
      email: student.email,
      phone: student.phone,
    });

    setShowForm(true);
  };

  // Delete Student
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmDelete) {
      setStudents(
        students.filter((student) => student.id !== id)
      );
    }
  };
  const handlePrint = () => {
  window.print();
};

  // Reset Form
  const resetForm = () => {
    setFormData({
      registrationNumber: "",
      fullName: "",
      gender: "",
      course: "",
      email: "",
      phone: "",
    });

    setEditingStudent(null);
    setShowForm(false);
  };

  // Search + Course Filter
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.fullName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      student.registrationNumber
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      student.course
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
const matchesCourse =
  selectedCourse === "All Courses" ||
  student.course === selectedCourse;

const matchesGender =
  selectedGender === "All Genders" ||
  student.gender === selectedGender;

return (
  matchesSearch &&
  matchesCourse &&
  matchesGender
);
  });

  return (
    <div className="students-page">

      {/* Header */}

      <div className="students-header">

        <div>
          <h1>Students</h1>

          <p>
            Manage registered students at Iyunga Technical School.
          </p>
        </div>

        <button
          className="add-student-btn"
          onClick={() => {
            setEditingStudent(null);

            setFormData({
              registrationNumber: "",
              fullName: "",
              gender: "",
              course: "",
              email: "",
              phone: "",
            });

            setShowForm(!showForm);
          }}
        >
          + Add Student
        </button>

      </div>

      {/* Add / Edit Form */}

      {showForm && (
        <div className="student-form-container">

          <h2>
            {editingStudent
              ? "Edit Student"
              : "Add New Student"}
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Registration Number</label>

              <input
                type="text"
                name="registrationNumber"
                placeholder="ITS/2026/005"
                value={formData.registrationNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="fullName"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Gender</label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select Gender
                </option>

                <option value="Male">
                  Male
                </option>

                <option value="Female">
                  Female
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>Course</label>

              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select Course
                </option>

                <option value="Information Technology">
                  Information Technology
                </option>

                <option value="Electrical Engineering">
                  Electrical Engineering
                </option>

                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="student@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>

              <input
                type="tel"
                name="phone"
                placeholder="0712345678"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-buttons">

              <button
                type="submit"
                className="save-student-btn"
              >
                {editingStudent
                  ? "Update Student"
                  : "Add Student"}
              </button>

              <button
                type="button"
                className="cancel-btn"
                onClick={resetForm}
              >
                Cancel
              </button>

            </div>

          </form>

        </div>
      )}

      {/* Dashboard Statistics */}

      <div className="students-stats">

        <div className="stat-card">

          <div className="stat-icon">
            👨‍🎓
          </div>

          <div>
            <h3>{students.length}</h3>
            <p>Total Students</p>
          </div>

        </div>

        <div className="stat-card">

          <div className="stat-icon">
            👨
          </div>

          <div>
            <h3>
              {
                students.filter(
                  (student) =>
                    student.gender === "Male"
                ).length
              }
            </h3>

            <p>Male Students</p>
          </div>

        </div>

        <div className="stat-card">

          <div className="stat-icon">
            👩
          </div>

          <div>
            <h3>
              {
                students.filter(
                  (student) =>
                    student.gender === "Female"
                ).length
              }
            </h3>

            <p>Female Students</p>
          </div>

        </div>

        <div className="stat-card">

          <div className="stat-icon">
            📚
          </div>

          <div>
            <h3>
              {
                new Set(
                  students.map(
                    (student) => student.course
                  )
                ).size
              }
            </h3>

            <p>Total Courses</p>
          </div>

        </div>

      </div>

      {/* Search + Filter */}

      <div className="students-search">

        <input
          type="text"
          placeholder="Search by name, registration number or course..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />

        <select
          value={selectedCourse}
          onChange={(e) =>
            setSelectedCourse(e.target.value)
          }
        >
          <option value="All Courses">
            All Courses
          </option>

          <option value="Information Technology">
            Information Technology
          </option>

          <option value="Electrical Engineering">
            Electrical Engineering
          </option>

          <option value="Mechanical Engineering">
            Mechanical Engineering
          </option>
        </select>
<select
  value={selectedGender}
  onChange={(e) =>
    setSelectedGender(e.target.value)
  }
>
  <option value="All Genders">
    All Genders
  </option>

  <option value="Male">
    Male
  </option>

  <option value="Female">
    Female
  </option>
</select>
<button
  className="clear-filters-btn"
  onClick={() => {
    setSearchTerm("");
    setSelectedCourse("All Courses");
    setSelectedGender("All Genders");
  }}
>
  Clear Filters
</button>
      </div>

      {/* Students Table */}

      <div className="students-table-container">

        <table className="students-table">

          <thead>

            <tr>
              <th>#</th>
              <th>Registration Number</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Course</th>
              <th>Status</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {filteredStudents.length > 0 ? (

              filteredStudents.map((student) => (

                <tr key={student.id}>

                  <td>{student.id}</td>

                  <td>
                    {student.registrationNumber}
                  </td>

                  <td>
                    {student.fullName}
                  </td>

                  <td>
                    {student.gender}
                  </td>

                  <td>
                    {student.course}
                  </td>
<td>
  <span
    className={
      student.status === "Active"
        ? "status-badge active"
        : "status-badge inactive"
    }
  >
    {student.status}
  </span>
</td>
                  <td>
                    {student.email}
                  </td>

                  <td>
                    {student.phone}
                  </td>

                  <td>

                    <button
                      className="view-btn"
                      onClick={() =>
                        setViewingStudent(student)
                      }
                    >
                      View
                    </button>

                    <button
                      className="edit-btn"
                      onClick={() =>
                        handleEdit(student)
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        handleDelete(student.id)
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="9"
                  className="no-students"
                >
                  <div className="empty-state">
                    <div className="empty-icon">
                      🎓
                    </div>
                  
                <h3> No students found</h3>
                <p>No students match your current search or filters.</p>

      <button
        className="empty-clear-btn"
        onClick={() => {
          setSearchTerm("");
          setSelectedCourse("All Courses");
          setSelectedGender("All Genders");
        }}
      >
        Clear Filters
      </button>

    </div>

                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

      {/* Student Details Modal */}

      {viewingStudent && (

        <div
          className="student-modal-overlay"
          onClick={() =>
            setViewingStudent(null)
          }
        >

          <div
            className="student-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="student-modal-header">

              <div>
                <h2>Student Details</h2>

                <p>
                  Iyunga Technical School
                </p>
              </div>

              <button
                className="modal-close-btn"
                onClick={() =>
                  setViewingStudent(null)
                }
              >
                ×
              </button>

            </div>

            <div className="student-profile">

              <div className="student-avatar">
                {viewingStudent.fullName.charAt(0)}
              </div>

              <h3>
                {viewingStudent.fullName}
              </h3>

              <p className="student-registration">
                {viewingStudent.registrationNumber}
              </p>

            </div>

           <div className="student-details-grid">

  <div className="detail-item">
    <span>Gender</span>

    <strong>
      {viewingStudent.gender}
    </strong>
  </div>

  <div className="detail-item">
    <span>Course</span>

    <strong>
      {viewingStudent.course}
    </strong>
  </div>

  <div className="detail-item">
    <span>Status</span>

    <strong
      className={
        viewingStudent.status === "Active"
          ? "status-active"
          : "status-inactive"
      }
    >
      {viewingStudent.status || "Active"}
    </strong>
  </div>

  <div className="detail-item">
    <span>Email</span>

    <strong>
      {viewingStudent.email}
    </strong>
  </div>

  <div className="detail-item">
    <span>Phone</span>

    <strong>
      {viewingStudent.phone}
    </strong>
  </div>

</div>

            <div className="student-modal-footer">

              <button
                className="modal-edit-btn"
                onClick={() => {
                  handleEdit(viewingStudent);
                  setViewingStudent(null);
                }}
              >
                Edit Student
              </button>
<button
  className="modal-print-btn"
  onClick={handlePrint}
>
  Print Profile
</button>
              <button
                className="modal-cancel-btn"
                onClick={() =>
                  setViewingStudent(null)
                }
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Students;