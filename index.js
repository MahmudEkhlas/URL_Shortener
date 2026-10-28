import express from 'express'
import path from 'node:path';
import router from './routes/url.js';
import staticRouter from './routes/staticRouter.js';
import connectMongoDb from './connect.js';
import URL from './models/url.js';
import authRouter from './routes/auth/user.js';
import cookieParser from 'cookie-parser';
import { checkAuth, restrictToLoggedInUserOnly } from './middlewares/auth.js';

connectMongoDb("mongodb://localhost:27017/short-url").then(() => console.log("MongoDB connected"));
const app = express();
const port = 5175;
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//routes
app.use("/user", authRouter);
app.use("/url", restrictToLoggedInUserOnly, router);
app.use("/", checkAuth ,staticRouter);



app.listen(port, () => console.log(`Server has started at Port no: ${port}`));