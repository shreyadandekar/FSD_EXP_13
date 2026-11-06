
import { useState, useEffect } from 'react'

function StudentForm({ onAdd, editingStudent, onUpdate, onCancel }) {
  const [name, setName] = useState('')
  const [skill, setSkill] = useState('React')

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name)
      setSkill(editingStudent.skill)
    } else {
      setName('')
      setSkill('React')
    }
  }, [editingStudent])

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim()) return

    const student = {
      name: name.trim(),
      skill,
      level: editingStudent?.level || 'Beginner'
    }

    if (editingStudent) {
      onUpdate(editingStudent.id, student)
    } else {
      onAdd(student)
    }

    setName('')
    setSkill('React')
  }

  return (
    <section className="card">
      <p className="eyebrow">
        {editingStudent ? 'UPDATE PROFILE' : 'JOIN THE HUB'}
      </p>

      <h2>{editingStudent ? 'Edit Learner' : 'Add a Learner'}</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="student-name">Student name</label>
        <input
          id="student-name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter a name"
          required
        />

        <label htmlFor="student-skill">Learning goal</label>
        <select
          id="student-skill"
          value={skill}
          onChange={e => setSkill(e.target.value)}
        >
          <option>React</option>
          <option>Python</option>
          <option>UI Design</option>
          <option>Data Science</option>
          <option>JavaScript</option>
        </select>

        <button type="submit">
          {editingStudent ? 'Save Changes' : 'Add Student +'}
        </button>

        {editingStudent && (
          <button type="button" className="cancel-btn" onClick={onCancel}>
            Cancel Editing
          </button>
        )}
      </form>
    </section>
  )
}

export default StudentForm
