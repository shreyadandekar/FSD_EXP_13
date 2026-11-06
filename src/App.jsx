
import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete React practical', category: 'Development', done: true },
    { id: 2, title: 'Revise Machine Learning', category: 'Study', done: false },
    { id: 3, title: 'Prepare Data Mining notes', category: 'Assignment', done: false },
    { id: 4, title: 'Practice JavaScript concepts', category: 'Development', done: true }
  ]);

  const [newTask, setNewTask] = useState('');

  const completed = tasks.filter(task => task.done).length;
  const progress = tasks.length
    ? Math.round((completed / tasks.length) * 100)
    : 0;

  function addTask(e) {
    e.preventDefault();

    if (!newTask.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: newTask,
        category: 'Personal',
        done: false
      }
    ]);

    setNewTask('');
  }

  function toggleTask(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">✦ CampusPulse</div>
        <p className="menu-label">WORKSPACE</p>
        <div className="nav-item active">▦ &nbsp; Dashboard</div>
        <div className="nav-item">✓ &nbsp; My Tasks</div>
        <div className="nav-item">◷ &nbsp; Study Planner</div>
        <div className="nav-item">⚙ &nbsp; Settings</div>

        <div className="sidebar-bottom">
          <div className="avatar">S</div>
          <div>
            <strong>Student Workspace</strong>
            <small>Learning mode</small>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <span>MY WORKSPACE / DASHBOARD</span>
          <span className="date">✦ Stay focused, keep growing</span>
        </header>

        <section className="welcome">
          <div>
            <p className="eyebrow">YOUR PERSONAL STUDY SPACE</p>
            <h1>Make today count.</h1>
            <p>Organise your tasks, track your progress and achieve your goals.</p>
          </div>
          <div className="welcome-icon">🎯</div>
        </section>

        <section className="stats">
          <div className="stat-card">
            <span>📋 Total Tasks</span>
            <h2>{tasks.length}</h2>
            <small>Tasks in your workspace</small>
          </div>

          <div className="stat-card">
            <span>✅ Completed</span>
            <h2>{completed}</h2>
            <small>Successfully finished</small>
          </div>

          <div className="stat-card">
            <span>⏳ Remaining</span>
            <h2>{tasks.length - completed}</h2>
            <small>Keep moving forward</small>
          </div>
        </section>

        <section className="content-grid">
          <div className="panel tasks-panel">
            <div className="panel-heading">
              <div>
                <h2>Today's Tasks</h2>
                <p>Your daily productivity checklist</p>
              </div>
              <span className="task-count">{completed}/{tasks.length}</span>
            </div>

            <form className="add-form" onSubmit={addTask}>
              <input
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
                placeholder="Add a new task..."
              />
              <button type="submit">+ Add Task</button>
            </form>

            <div className="task-list">
              {tasks.map(task => (
                <div className="task" key={task.id}>
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTask(task.id)}
                  />

                  <div className={task.done ? 'task-info completed' : 'task-info'}>
                    <strong>{task.title}</strong>
                    <small>{task.category}</small>
                  </div>

                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(task.id)}
                    aria-label="Delete task"
                  >
                    ×
                  </button>
                </div>
              ))}

              {tasks.length === 0 && (
                <p className="empty">No tasks yet. Add one to get started!</p>
              )}
            </div>
          </div>

          <div className="panel progress-panel">
            <h2>Study Progress</h2>
            <p>Your task completion overview</p>

            <div className="progress-circle" style={{
              background: `conic-gradient(#7057e8 ${progress * 3.6}deg, #eeeafc 0deg)`
            }}>
              <div className="circle-inner">
                <strong>{progress}%</strong>
                <small>Completed</small>
              </div>
            </div>

            <div className="progress-note">
              {progress === 100
                ? 'Amazing! All tasks completed 🎉'
                : 'Every small step brings you closer to your goals.'}
            </div>

            <div className="tip">
              <span>💡 Daily Tip</span>
              <p>Break large assignments into smaller tasks to stay productive.</p>
            </div>
          </div>
        </section>

        <footer>CampusPulse · Designed for smarter student productivity</footer>
      </main>
    </div>
  );
}

export default App;
