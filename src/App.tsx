import { useState } from 'react'
import './App.css'

function App() {
  const folders = [
    { id: 'basics', name: 'React Basics' },
    { id: 'hooks', name: 'Hooks' },
    { id: 'components', name: 'Components' },
    { id: 'state', name: 'State & Props' },
    { id: 'effects', name: 'Effects' },
  ]

  const [activeFolder, setActiveFolder] = useState(folders[0].id)

  return (
    <div className="workspace">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="title">Practice Workspace</div>
          <div className="subtitle">Your React training folder</div>
        </div>
        <div className="folder-list">
          {folders.map((folder) => (
            <button
              key={folder.id}
              className={
                folder.id === activeFolder
                  ? 'folder-item active'
                  : 'folder-item'
              }
              onClick={() => setActiveFolder(folder.id)}
            >
              <span className="folder-dot" />
              {folder.name}
            </button>
          ))}
        </div>
      </aside>

      <main className="practice">
        <div className="practice-header">
          <h1>Робоча зона для практики React</h1>
          <p>
            Обери папку зліва та пиши свій код у цьому компоненті. Тут можна
            створювати приклади, тести та маленькі демо.
          </p>
        </div>

        <section className="practice-card">
          <div className="card-title">Поточна папка</div>
          <div className="card-value">
            {folders.find((f) => f.id === activeFolder)?.name}
          </div>
        </section>

        <section className="practice-card">
          <div className="card-title">Швидкий старт</div>
          <ul className="practice-list">
            <li>Додай новий компонент у `src/` і відрендери його тут.</li>
            <li>Попрактикуй `useState`, `useEffect` або власні хуки.</li>
            <li>Створи маленьку фічу: таймер, лічильник, список задач.</li>
          </ul>
        </section>

        <section className="practice-card sandbox">
          <div className="card-title">Пісочниця</div>
          <p className="sandbox-text">
            Це місце для будь-яких експериментів. Можеш повністю замінити цей
            блок своїм UI.
          </p>
          <button className="primary-btn">Стартувати вправу</button>
        </section>
      </main>
    </div>
  )
}

export default App
