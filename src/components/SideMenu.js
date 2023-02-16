/* eslint-disable jsx-a11y/anchor-is-valid */
import "./SideMenu.css";

function SideMenu() {
	return (
		<div className="lateral-menu-container">
			<div className="lateral-menu-logo">
				<img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt=""/>
				{/* <p>SocialContext</p> */}
			</div>

			<div className="profile-section" id="profile-box">

			</div>

			<div className="logout-profile">
				<a href='' id="logOut">Log out</a>
				<img
					src="https://cdn-icons-png.flaticon.com/512/1828/1828427.png"
					alt=""
				/>
			</div>
		</div>
	);
}

export { SideMenu };
