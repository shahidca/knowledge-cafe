import Headers from './components/header/Header'

import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmark from './components/bookmark/Bookmark'

function App() {
  const [bookmark, setBookmark]=([]);
  const handleToBookMark=(blog)=>{
    const newBookmarks=[...bookmark, blog]
    setBookmark(newBookmarks)

  }

  return (
    <>
      <Headers></Headers>
      <div className='w-11/12 mx-auto md:flex  py-2'>
      <Blogs handleToBookMark={handleToBookMark}></Blogs>
      <Bookmark bookmark={bookmark}></Bookmark>
      </div>
    </>
  )
}

export default App
