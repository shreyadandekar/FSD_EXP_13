
function StudentList({ students, onEdit, onDelete, onRefresh }) {
  return (
    <section className="card student-board">
      <div className="board-heading">
        <div>
          <p className="eyebrow">LEARNING COMMUNITY</p>
          <h2>Student Board</h2>
        </div>
        <span className="student-count">{students.length} Learners</span>
      </div>

      {students.length === 0 && (
        <p>No students added yet.</p>
      )}

      {students.map(student => (
        <div className="student-row" key={student.id}>
          <div className="student-avatar">
            {student.name.charAt(0).toUpperCase()}
          </div>

          <div className="student-details">
            <strong>{student.name}</strong>
            <p>{student.skill}</p>
          </div>

          <span className="level">{student.level}</span>

          <div className="student-actions">
            <button
              className="edit-btn"
              onClick={() => onEdit(student)}
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => onDelete(student.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <button className="refresh-btn" onClick={onRefresh}>
        ↻ Refresh Student Records
      </button>
    </section>
  )
}

export default StudentList
