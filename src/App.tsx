import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Home from './pages/Home'
import Consulting from './pages/Consulting'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consulting" element={<Consulting />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
