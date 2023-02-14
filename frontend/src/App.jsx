import { useState } from 'react'
import './App.css'
import TransactionForm from './form/form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <TransactionForm />
    </div>
  )
}

export default App
