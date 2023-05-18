import './App.css'

import { Autoriza } from './Autoriza'
import { Home } from './Home'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/autoriza' element={<Autoriza />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
