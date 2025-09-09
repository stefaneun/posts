import { useState } from 'react'
import { MainPage } from './pages/main'
import { PostsProvider } from './pages/posts/PostsProvider'

function App() {

  return (
    <PostsProvider>
      <MainPage />
    </PostsProvider>
  )
}

export default App
