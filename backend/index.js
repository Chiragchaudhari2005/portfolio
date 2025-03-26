import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
console.log(process.env.PORT);
app.listen(process.env.PORT,()=> {console.log("server is running",process.env.PORT)});


export default app;