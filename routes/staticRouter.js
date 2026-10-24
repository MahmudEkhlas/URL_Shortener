import express from "express";
import { Router } from "express";
import URL from "../models/url.js";

const staticRouter = Router();

staticRouter.get("/", async(req, res) => {
    const allUrl = await URL.find({});
    return res.render("home", {
        urls: allUrl
    });
});
export default staticRouter;