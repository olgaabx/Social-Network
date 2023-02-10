
function Home() {
  return (
    <>
      {/* < CONTENEDOR DEL HOME > */}
      <div class="home-container">
        {/* < BARRA LATERAL DEL MENÚ > */}
        <div class="lateral-menu-container">
          <div class="logo-container-home">
            <img src="https://d9hhrg4mnvzow.cloudfront.net/admissions.prepscholar.com/7ade0971-artificial-intelligence_107g07g07a07a000000028.png" alt="logo" class="logo-home" />
            <p class="logo-home-title">TecHelp</p>
          </div>

          <div class="profile-section" id="profile-box"></div>
          
          <div class="logout-profile">
            <button id="logOutS">Cerrar sesión</button>
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828427.png" alt="" />
          </div>
          
        </div> {/* < CIERRE LATERAL MENÚ-CONTAINER > */}
      </div> {/* CIERRE HOME-CONTAINER */}
    </>
  )
}

export { Home };