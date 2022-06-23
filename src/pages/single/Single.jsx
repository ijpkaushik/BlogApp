import { useEffect } from "react";
import Sidebar from "../../components/sidebar/SideBar";
import SinglePost from "../../components/singlepost/SinglePost";
import "./single.css";

export default function Single() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
    );
}