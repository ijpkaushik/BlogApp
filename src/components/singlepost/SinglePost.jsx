import { Link, useLocation } from "react-router-dom";
import "./singlepost.css";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

export default function SinglePost() {
	const { user } = useContext(Context);
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const publishFolder = "http://localhost:5000/images/";
	const [post, setPost] = useState({});

	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [updateMode, setUpdateMode] = useState(false);

	// console.log(location);
	// console.log(path);

	const fetchPost = async () => {
		const res = await axios.get("/posts/" + path);
		setPost(res.data);
		setTitle(res.data.title);
		setDesc(res.data.desc);
		console.log(res.data.title);
		console.log(res.data.desc);
	};

	useEffect(() => {
		fetchPost();
	}, [path]);

	const handleDelete = async () => {
		try {
			await axios.delete(`/posts/${post._id}`, {
				data: {
					username: user.username,
				},
			});
			window.location.replace("/");
		} catch (error) {}
	};

	const handleUpdate = async () => {
		try {
			await axios.put(`/posts/${post._id}`, {
				username: user.username,
				title: title,
				desc: desc,
			});
			window.location.reload();
		} catch (error) {}
	};

	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				{post.photo && (
					<img
						className="singlePostImg"
						src={publishFolder + post.photo}
						alt="postImage"
					/>
				)}

				{updateMode ? (
					<input
						type="text"
						value={title}
						className="singlePostTitleInput"
						onChange={(e) => setTitle(e.target.value)}
					/>
				) : (
					<h1 className="singlePostTitle">
						{post.title}
						{post.username === user?.username && (
							<div className="singlePostEdit">
								<i
									className="singlePostIcon far fa-edit"
									onClick={() => setUpdateMode(true)}
								></i>
								<i
									className="singlePostIcon far fa-trash-alt"
									onClick={handleDelete}
								></i>
							</div>
						)}
					</h1>
				)}

				<div className="singlePostInfo">
					<span>
						Author:
						<b className="singlePostAuthor">
							<Link className="link" to={`/?user=${post.username}`}>
								{post.username}
							</Link>
						</b>
					</span>
					<span>{new Date(post.createdAt).toDateString()}</span>
				</div>

				{updateMode ? (
					<textarea
						type="text"
						rows={5}
						value={desc}
						className="singlePostDescInput"
						onChange={(e) => setDesc(e.target.value)}
					/>
				) : (
					<pre className="singlePostDesc">{desc}</pre>
				)}
				{updateMode && (
					<button className="singlePostButton" onClick={handleUpdate}>
						Update
					</button>
				)}
			</div>
		</div>
	);
}
