import Headers from './components/header/Header'

import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmark from './components/bookmark/Bookmark'

function App() {

  return (
    <>
      <Headers></Headers>
      <div className='w-11/12 mx-auto md:flex items-center py-2'>
      <Blogs></Blogs>
      <Bookmark></Bookmark>
      </div>
    </>
  )
}

export default App
