
function Navbar() {
  return (
    <nav>
      <div class="navbar-left">
        <div class="logo-container-home">
          <img src="https://d9hhrg4mnvzow.cloudfront.net/admissions.prepscholar.com/7ade0971-artificial-intelligence_107g07g07a07a000000028.png" alt="logo" class="logo-home" />
          <p class="logo-home-title">Social Context</p>
        </div>
      </div>
      <div class="navbar-right">
        <div class="logout-profile">
          <button href="" id="logOutS">Cerrar sesión</button>
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828427.png" alt="" />
        </div>
      </div>
    </nav>
  )
}

export { Navbar };