import { nanoid } from "nanoid";
import URL from "../models/url.js"

async function handleShortUrl(req, res) {
    const shortID = nanoid(8);
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ msg: "URL is  required" });
    }
    await URL.create({
        shortID: shortID,
        redirectURL: body.url,
        visitHistory: []
    });

    return res.render("home" ,{
        id : shortID,
    });
}

async function loadUrl(req, res) {
    const shortID = req.params.shortID;
    const entry = await URL.findOneAndUpdate({
        shortID
    }, {
        $push: {
            visitHistory:{ timestamp : Date.now()}
        }
    })
    res.redirect(entry.redirectURL);
}

async function  handleGetAnalytics(req, res) {
    const shortID = req.params.shortID;
    const result = await URL.findOne({shortID});
    const total = result.visitHistory.length;
    res.json({
        totalClicks: total,
        analytica : result.visitHistory
    });
}

export  { handleShortUrl, loadUrl, handleGetAnalytics };