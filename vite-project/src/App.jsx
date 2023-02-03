import './App.css'
import Button from './components/Button'
import Image from './components/Image'

function App() {

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <Image/>
        <Button />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
