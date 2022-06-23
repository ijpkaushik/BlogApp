import "./write.css";
import { useContext, useState } from "react";
import axios from 'axios'
import { Context } from "../../context/Context";

export default function Write() {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [categories, setCategories] = useState([])
    const [file, setFile] = useState(null)
    const { user } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
            categories
        }
        if (file) {
            const data = new FormData();

            const filename = Date.now() + file.name;
            console.log(filename);
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;

            try {
                await axios.post('/upload', data)
            } catch (error) {

            }
        }
        try {
            await axios.post('/posts', newPost);
            window.location.replace('/');
            window.scrollTo(0, 0);
        } catch (error) {

        }
    }

    return (
        <div className="write">
            {
                file &&
                (<img
                    className="writeImg"
                    src={URL.createObjectURL(file)}
                    alt="postImage"
                />)
            }
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput" className="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input id="fileInput"
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <input
                        className="writeInput"
                        placeholder="Title"
                        type="text"
                        autoFocus={true}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="writeFormGroup">
                    <span className="writeInputCatName" >Categoty:</span>
                    <select
                        className="writeInputCatDropdown"
                        type="text"
                        autoFocus={true}
                        onClick={(e) => setCategories(e.target.value)}
                    >
                        <option value="Art">Art</option>
                        <option value="Health">Health</option>
                        <option value="Bussiness">Bussiness</option>
                        <option value="Technology">Technology</option>
                        <option value="Cinema">Cinema</option>
                        <option value="Sports">Sports</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Environment">Environment</option>
                        <option value="Food">Food</option>
                        <option value="Science">Science</option>
                        <option value="Education">Education</option>
                        <option value="Politics">Politics</option>
                        <option value="Travel">Travel</option>
                        <option value="Literature">Literature</option>
                        <option value="Music">Music</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="writeFormGroup">
                    <textarea
                        className="writeInput writeText"
                        placeholder="Tell your story..."
                        type="text"
                        autoFocus={true}
                        onChange={(e) => setDesc(e.target.value)}

                    />
                </div>
                <button className="writeSubmit" type="submit">
                    Publish
                </button>
            </form>
        </div>
    );
}