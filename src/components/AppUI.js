import { Navbar } from './Navbar'
import { Post } from './Post'
import { SideMenu } from './SideMenu'
import { Home } from './Home'

function AppUI() {
  return (
    <Home>
        <Navbar />
        <Post />
        <SideMenu />
    </Home>
  )
}

export { AppUI };