import { Link } from "react-router-dom";
import "./post.css";
import defaultImagePost from "../../assets/defaultImagePost.jpg";

export default function Post({ post }) {
	const publishFolder = "http://localhost:5000/images/";

	const handlePost = () => {
		window.location.href = "/post/" + post._id;
	};

	return (
		<div className="post">
			<div onClick={handlePost} className="link">
				{post.photo ? (
					<img
						className="postImg"
						src={publishFolder + post.photo}
						alt="postImage"
					/>
				) : (
					<img className="postImg" src={defaultImagePost} alt="postImage" />
				)}
				<div className="postInfo">
					<span className="postTitle">{post.title}</span>
					<div className="postCats">
						{post.categories.map((cat) => (
							<span key={cat} className="postCat">
								<Link className="link" to={`/?cat=${cat}`}>
									{cat}
								</Link>
							</span>
						))}
					</div>
					<span className="postDate">
						{new Date(post.createdAt).toDateString()}
					</span>
				</div>
				<pre className="postDesc">{post.desc}</pre>
			</div>
		</div>
	);
}
