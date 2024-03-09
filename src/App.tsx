import './App.css'
import Start from './pages/Start/Start'
import Profile from './pages/Profile/Profile'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Post from './pages/Post/Post'
import { useAppSelector } from './hooks/hooks'
import { useState } from 'react'

interface PostType{
  id: string,
  title: string,
  tag: string,
  description: string,
  img: string
}

function App() {

  const postData: PostType | undefined = useAppSelector((state) => state.changePostData.data)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Start />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/me' element={<Profile />}></Route>
        <Route path={'/' + postData?.id} element={<Post post={postData} />}></Route>
      </Routes>
    </Router>
  )
}

export default App
