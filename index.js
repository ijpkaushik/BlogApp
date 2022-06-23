const express = require('express')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/authentication')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const categoryRoute = require('./routes/categories')

dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, '/images')))

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(console.log('connected to mongodb'))
    .catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name) 
    }
})

const upload = multer({ storage: storage })

app.post('/backend/upload', upload.single('file'), (req, res) => {
    res.status(200).json("file uploaded")
})

app.use('/backend/auth', authRoute)
app.use('/backend/users', userRoute)
app.use('/backend/posts', postRoute)
app.use('/backend/categories', categoryRoute)


app.listen(PORT, () => {
    console.log('listning to port 5000');
})