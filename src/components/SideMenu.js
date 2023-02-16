import "./SideMenu.css";

function SideMenu() {
	return (
		<div className="lateral-menu-container">
			<div className="logo-container-home">
				{/* <img
					src="https://d9hhrg4mnvzow.cloudfront.net/admissions.prepscholar.com/7ade0971-artificial-intelligence_107g07g07a07a000000028.png"
					alt="logo"
					className="logo-home"
				/> */}
				<p className="logo-home-title">SocialContext</p>
			</div>

			<div className="profile-section" id="profile-box"></div>

			<div className="logout-profile">
				<button id="logOutS">Cerrar sesión</button>
				<img
					src="https://cdn-icons-png.flaticon.com/512/1828/1828427.png"
					alt=""
				/>
			</div>
		</div>
	);
}

export { SideMenu };
