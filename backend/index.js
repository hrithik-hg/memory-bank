import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.use('/posts', postRoutes);

app.get('/', (req,res)=>{
    res.send('Hello to Memory-Bank API')
})

const PORT = process.env.PORT || 8800;

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true}).then(()=>
        app.listen(PORT, ()=>console.log(`Server Running on Port: http://localhost:${PORT}`))
    ).catch((error)=>
        console.log(error.message)
    );