import { Link } from "react-router-dom";
import "./topbar.css";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import defaultImage from "../../assets/defaultImage.png";
import { FaBars } from "react-icons/fa";

export default function Topbar() {
	const { user, dispatch } = useContext(Context);
	const publishFolder = "http://localhost:5000/images/";
	const [open, setOpen] = useState(false);

	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
	};

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className="top">
			<div className="topLeft">
				<a className="link" href="https://github.com/ijpkaushik">
					<span className="signature">
						<strong>Jai Prakash Kaushik</strong>
					</span>
				</a>
			</div>
			<div className="largeDevice">
					{/* <div className="topCenter"> */}
						<ul className="topList" onClick={handleDrawerClose}>
							<li className="topListItem">
								<Link className="link" to="/">
									HOME
								</Link>
							</li>
							<li className="topListItem">
								<Link className="link" to="/about">
									ABOUT
								</Link>
							</li>
							<li className="topListItem">
								<Link className="link" to="/contact">
									CONTACT
								</Link>
							</li>
							<li className="topListItem">
								<Link className="link" to="/write">
									WRITE
								</Link>
							</li>
							{user && (
								<li className="topListItem" onClick={handleLogout}>
									LOGOUT
								</li>
							)}
						</ul>
					{/* </div> */}
			</div>
			<div className="smallDevice">
				<span className="toogleButton">
					<FaBars className="icons" onClick={handleDrawerOpen} />
				</span>
				{open && (
					<div className="topCenter">
						<ul className="topList" onClick={handleDrawerClose}>
							<li className="topListItem">
								<Link className="link" to="/">
									HOME
								</Link>
							</li>
							<li className="topListItem">
								<Link className="link" to="/about">
									ABOUT
								</Link>
							</li>
							<li className="topListItem">
								<Link className="link" to="/contact">
									CONTACT
								</Link>
							</li>
							<li className="topListItem">
								<Link className="link" to="/write">
									WRITE
								</Link>
							</li>
							{user && (
								<li className="topListItem" onClick={handleLogout}>
									LOGOUT
								</li>
							)}
						</ul>
					</div>
				)}
			</div>
			<div className="topRight">
				{user ? (
					(user.profilePic && (
						<Link className="link" to="/settings">
							<img
								className="topImg"
								src={publishFolder + user.profilePic}
								alt="profilepic"
							/>
						</Link>
					)) ||
					(!user.profilePic && (
						<Link className="link" to="/settings">
							<img className="topImg" src={defaultImage} alt="profilepic" />
						</Link>
					))
				) : (
					<ul className="topListRight">
						<li className="topListItemRight">
							<Link className="link" to="/login">
								LOGIN
							</Link>
						</li>
						<li className="topListItemRight">
							<Link className="link" to="/register">
								REGISTER
							</Link>
						</li>
					</ul>
				)}
			</div>
		</div>
	);
}
