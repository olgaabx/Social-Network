import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <div className='navbar-left'>
        <div className='logo-container-home'>
          <p className='logo-home-title'>Social Context</p>
        </div>
      </div>
      <div className='navbar-right'>
        <div className='logout-profile'>
          <button href="" id="logOutS">Cerrar sesión</button>
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828427.png" alt="" />
        </div>
      </div>
    </nav>
  )
}

export { Navbar };