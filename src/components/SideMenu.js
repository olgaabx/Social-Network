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
			</div>
		</div>
	);
}

export { SideMenu };
