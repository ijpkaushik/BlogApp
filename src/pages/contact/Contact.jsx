import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
	const form = useRef();
	const [successMessage, setSuccessMessage] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs.init("user_jzSdoID2PlBXcJNClXCkD");

		emailjs
			.sendForm(
				"service_ijpkaushik",
				"template_ijpkaushik",
				form.current,
				"user_jzSdoID2PlBXcJNClXCkD"
			)
			.then(
				(result) => {
					console.log(result.text);
					setSuccessMessage(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	return (
		<div className="contact">
			<div className="contactItem">
				<span className="contactTitle">CONTACT US</span>
				<form ref={form} className="contactForm" onSubmit={handleSubmit}>
					<label className="contactLabel">NAME</label>
					<input
						name="user_name"
						className="contactInput"
						placeholder="Name"
						type="text"
						autoFocus={true}
					/>
					<label className="contactLabel">EMAIL</label>
					<input
						name="user_email"
						className="contactInput"
						placeholder="Email"
						type="email"
						autoFocus={true}
					/>
					<label className="contactLabel">DESCRIPTION</label>
					<textarea
						rows={10}
						name="message"
						className="contactInput"
						placeholder="Description"
						type="text"
						autoFocus={true}
					/>
					<button className="contactSubmit" type="submit" value="Send">
						Send Email
					</button>
				</form>
			</div>
			{successMessage && (
				<span className="success">Email Sent Successfully!!</span>
			)}

			<div className="contactItem">
				<span className="contactTitle">FOLLOW US</span>
				<div className="contactSocial">
					<a href="https://www.linkedin.com/in/ijpkaushik/">
						<i className="contactIcon fab fa-linkedin"></i>
					</a>
					<a href="https://github.com/ijpkaushik">
						<i className="contactIcon fab fa-github-square"></i>
					</a>
					<a href="https://www.reddit.com/user/ijpkaushik">
						<i className="contactIcon fab fa-reddit-square"></i>
					</a>
					<a href="https://twitter.com/ijpkaushik">
						<i className="contactIcon fab fa-twitter-square"></i>
					</a>
					<a href="https://www.instagram.com/ijpkaushik">
						<i className="contactIcon fab fa-instagram-square"></i>
					</a>
				</div>
				<div className="contactSocial">
					<a href="https://www.facebook.com/ijpkaushik">
						<i className="contactIcon fab fa-facebook-square"></i>
					</a>
					<a href="https://snapchat.com/add/ijapkasushik">
						<i className="contactIcon fab fa-snapchat-square"></i>
					</a>
					<a href="https://discordapp.com/users/667405864549744650">
						<i className="contactIcon fab fa-discord"></i>
					</a>
					<a href="https://in.pinterest.com/ijpkaushik/_saved/">
						<i className="contactIcon fab fa-pinterest-square"></i>
					</a>
					<a href="https://www.youtube.com/channel/UCJyFU-R0AzwEGkcyRiYLi4g">
						<i className="contactIcon fab fa-youtube-square"></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
