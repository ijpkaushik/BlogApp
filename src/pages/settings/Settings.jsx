import "./settings.css";
import SideBar from "../../components/sidebar/SideBar";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import axios from 'axios'
import defaultImage from '../../assets/defaultImage.png'


export default function Settings() {
    const { user, dispatch } = useContext(Context);
    const publishFolder = "http://localhost:5000/images/"
    const [file, setFile] = useState(null)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [updateSuccess, setUpdateSuccess] = useState(false)

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        setUpdateSuccess(false);

        dispatch({ type: 'UPDATE_START' })
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;

            try {
                await axios.post('/upload', data)
            } catch (error) {

            }
        }
        try {
            const res = await axios.put('/users/' + user._id, updatedUser);
            dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
            setUpdateSuccess(true);

        } catch (error) {
            dispatch({ type: 'UPDATE_FAILURE' })
        }
    }

    useEffect(() => {
        setUpdateSuccess(false);
    }, [])

    const handleDelete = async () => {
        try {
            await axios.delete(`/users/${user._id}`, {
                data: {
                    userId: user._id
                }
            });
            dispatch({ type: 'LOGOUT' });
            window.location.replace('/');
        } catch (error) {

        }
    }

    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update Your Account</span>
                    <span className="settingsTitleDelete" onClick={handleDelete}>Delete Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleProfileUpdate}>
                    <label>Profile Picture</label>
                    <div className="settingsPP">

                        {/* {
                            user.profilePic &&
                            <img
                                className="topImg"
                                src={file ? URL.createObjectURL(file) : publishFolder + user.profilePic}
                                alt="profilepic"
                            />
                                ||
                            !user.profilePic &&
                            <img
                                className="topImg"
                                src={defaultImage}
                                alt="profilepic"
                            />
                        } */}
                        <img
                            src={file ? URL.createObjectURL(file) : publishFolder + user.profilePic}
                            alt="profilePic"
                        />
                        
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                        </label>
                        <input
                            id="fileInput"
                            type="file"
                            style={{ display: "none" }}
                            className="settingsPPInput"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                    <label>Username</label>
                    <input type="text"
                        placeholder={user.username}
                        // placeholder="New Username"
                        name="name"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label>Email</label>
                    <input type="email"
                        placeholder={user.email}
                        // placeholder="New Email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>Password</label>
                    <input type="password"
                        // placeholder="New Password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <p className="buttonContainer">
                        <button className="settingsSubmitButton" type="submit">
                            Update
                        </button>
                    </p>

                    {
                        updateSuccess &&
                        <span style={{ color: "green", textAlign: "center", marginTop: "20px" }}        >
                            Updated Successfully
                        </span>
                    }

                </form>
            </div>
            <SideBar />
        </div>
    );
}