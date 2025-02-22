import { useState } from 'react'
import './App.css'
import './assets/custom.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { UsersComponent } from './components/usersComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <UsersComponent/>
       </div>
    </>
  )
}

export default App
