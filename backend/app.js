import express from "express"
import cors from "cors"
//const cors=require('cors')
import dotenv from "dotenv"
import { dbConnection } from "./database/dbConnection.js";
import reservationRouter from "./routes/reservationRoutes.js";
import { errorMiddleware } from "./error/error.js";

const app=express();
dotenv.config({path:"./config/config.env"})

app.use(cors());

/*app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials:true,
    optionSuccessStatus:200
}));*/



dbConnection()
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(errorMiddleware);
app.use("/api/v1/reservation", reservationRouter);
export default app;