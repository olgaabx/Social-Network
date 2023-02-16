// import { Navbar } from './Navbar'
// import { Post } from './Post'
// import { SideMenu } from './SideMenu'
import './Home.css'

function Home({ children }) {
  return (
    <div className='home-container'>
      {children}
    </div>
  )
}

export { Home };