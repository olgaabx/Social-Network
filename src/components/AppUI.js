import { Navbar } from './Navbar'
import { Post } from './Post'
import { SideMenu } from './SideMenu'
import { Home } from './Home'

function AppUI() {
  return (
    <>
      <Navbar />
      <Home>
          <Post />
          <SideMenu />
      </Home>
    </>
  )
}

export { AppUI };