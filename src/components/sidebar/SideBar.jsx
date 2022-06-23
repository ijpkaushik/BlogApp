import { Link } from "react-router-dom";
import "./sidebar.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    const fetchCat = async () => {
        const res = await axios.get('/categories')
        setCats(res.data)
        console.log(res.data)
    }

    useEffect(() => {
        fetchCat();
    }, [])
    
    return (
        <div className="sidebar">            
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((cat) => (
                        <li key={cat._id} className="sidebarListItem">
                            <Link className="link " to={`/?cat=${cat.name}`}>
                                {cat.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <a href="https://www.linkedin.com/in/ijpkaushik/">
                        <i className="sidebarIcon fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/ijpkaushik">
                        <i className="sidebarIcon fab fa-github-square"></i>
                    </a>
                    <a href="https://www.reddit.com/user/ijpkaushik">
                        <i className="sidebarIcon fab fa-reddit-square"></i>
                    </a>
                    <a href="https://twitter.com/ijpkaushik">
                        <i className="sidebarIcon fab fa-twitter-square"></i>
                    </a>
                    <a href="https://www.instagram.com/ijpkaushik">
                        <i className="sidebarIcon fab fa-instagram-square"></i>
                    </a>
                </div>
                <div className="sidebarSocial">
                    <a href="https://www.facebook.com/ijpkaushik">
                        <i className="sidebarIcon fab fa-facebook-square"></i>
                    </a>
                    <a href="https://snapchat.com/add/ijapkasushik">
                        <i className="sidebarIcon fab fa-snapchat-square"></i>
                    </a>
                    <a href="https://discordapp.com/users/667405864549744650">
                        <i className="sidebarIcon fab fa-discord"></i>
                    </a>
                    <a href="https://in.pinterest.com/ijpkaushik/_saved/">
                        <i className="sidebarIcon fab fa-pinterest-square"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCJyFU-R0AzwEGkcyRiYLi4g">
                        <i className="sidebarIcon fab fa-youtube-square"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}