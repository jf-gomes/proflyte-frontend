import './App.css'
import Start from './pages/Start/Start'
import Profile from './pages/Profile/Profile'
import CreatePost from './pages/CreatePost/CreatePost'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Start />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/me' element={<Profile />}></Route>
        <Route path='/new' element={<CreatePost />}></Route>
      </Routes>
    </Router>
  )
}

export default App
