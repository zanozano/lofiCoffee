import { DinamicBackground } from "./components/DinamicBackground"
import { DinamicPhrase } from "./components/DinamicPhrase"
import { Timer } from "./components/Timer"

function App() {

  return (
    <main>
      <div className="container">
        <div className="header">
          1
        </div>
        <div className="body">
          <div className="body-item">
            <Timer />
            <DinamicPhrase />
          </div>
        </div>
        <div className="footer">
          3
        </div>
      </div>
      <DinamicBackground />
    </main>
  )
}

export default App
