import './loadEnv.js';
import express from "express";
import cors from "cors";
import morgan from "morgan";
import moviesRouter from './routes/movies.js'
import usersRouter from './routes/users.js';




const app = express();
const PORT = process.env.PORT || 4000;


//* middleware
app.use(cors());  //*connect front and back ends
app.use(morgan('dev')); //*logger
app.use(express.json()); //* for data in req.body
app.use(express.urlencoded ({extended:true})); //* allow data in url string


//* Routes
app.use('/api/movies', moviesRouter);
app.use('/api/users', usersRouter);

app.get("/", (req, res) => {
    res.send("backend running...")
});


app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`);
});