import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import axios from 'axios'
import "./homepage.css";

export default function Homepage() {
  const { search } = useLocation();
  // console.log(search);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get('/posts' + search)
    console.log(res);
    setPosts(res.data)
  }

  useEffect(() => {
    fetchPosts();
  }, [search])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  );
}