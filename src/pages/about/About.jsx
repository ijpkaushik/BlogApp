import React from 'react'
import aboutMeImage from '../../assets/aboutMeImage.jpg'
import './about.css'

const About = () => {

    return (
        <div className="about">
            <div className="aboutItem">
                <span className="aboutTitle">ABOUT ME</span>
                <img
                    src={aboutMeImage}
                    alt="abotMeImage"
                />
                <p>
                    "I am a third year Computer Science Engineering student🎓
                    from Maharaja Surajmal Institute of Technology 🏛.
                    I am a Full Stack MERN Developer🕸️, who loves solving real world problems👨‍💻
                    and currently working on my Data Structures and Algorithms skills 🤓.
                    I like to take up challenges and work my way through them.
                    <br/>                    
                    I am ambitious and driven. I thrive on challenge and constantly set goals for myself,
                    so I have something to strive towards. I’m not comfortable with settling,
                    and I’m always looking for an opportunity to do better and achieve greatness.
                    I am results oriented, constantly checking in with the goal to determine how close or
                    how far away we are and what it will take to make it happen."
                </p>
            </div>

            <div className="aboutItem">
                <span className="aboutTitle">FOLLOW US</span>
                <div className="aboutSocial">
                    <a href="https://www.linkedin.com/in/ijpkaushik/">
                        <i className="aboutIcon fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/ijpkaushik">
                        <i className="aboutIcon fab fa-github-square"></i>
                    </a>
                    <a href="https://www.reddit.com/user/ijpkaushik">
                        <i className="aboutIcon fab fa-reddit-square"></i>
                    </a>
                    <a href="https://twitter.com/ijpkaushik">
                        <i className="aboutIcon fab fa-twitter-square"></i>
                    </a>
                    <a href="https://www.instagram.com/ijpkaushik">
                        <i className="aboutIcon fab fa-instagram-square"></i>
                    </a>
                </div>
                <div className="aboutSocial">
                    <a href="https://www.facebook.com/ijpkaushik">
                        <i className="aboutIcon fab fa-facebook-square"></i>
                    </a>
                    <a href="https://snapchat.com/add/ijapkasushik">
                        <i className="aboutIcon fab fa-snapchat-square"></i>
                    </a>
                    <a href="https://discordapp.com/users/667405864549744650">
                        <i className="aboutIcon fab fa-discord"></i>
                    </a>
                    <a href="https://in.pinterest.com/ijpkaushik/_saved/">
                        <i className="aboutIcon fab fa-pinterest-square"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCJyFU-R0AzwEGkcyRiYLi4g">
                        <i className="aboutIcon fab fa-youtube-square"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About
