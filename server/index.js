import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();

const __dirname = path.resolve();

dotenv.config({path: './server/.env'});


// app.use(bodyParser.json({ limit: "30mb", extended: true}));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/post', postRoutes); // the prefix for all routes in the routes/post.js file
app.use('/user', userRoutes);


// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));

    app.get('*', function (req, res) {
        const index = path.join(__dirname, '../client/build/index.html');
        res.sendFile(index);
      });
}


// const CONNECTION_URL = 'mongodb+srv://ardithyseni:ardithyseni123@cluster0.c1dqiz4.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port:${PORT}`)))
    .catch((error) => console.log(error));

    console.log(__dirname);