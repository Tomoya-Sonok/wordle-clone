import "./App.css"
import Board from "./components/Board"
import Keyboard from "./components/Keyboard"
import { boardDefault } from "./Words"
import { createContext, useState } from "react"

// Context API を使用
// 以下のAppContext.Providerに入れたコンポーネント内で
// valueとして渡した変数や関数が使えるようになる
export const AppContext = createContext()

function App() {
  const [board, setBoard] = useState(boardDefault)
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 })
  return (
    <div className="App">
      <nav>
        <h1>Worlde</h1>
      </nav>
      <AppContext.Provider
        value={{ board, setBoard, currAttempt, setCurrAttempt }}
      >
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  )
}

export default App
