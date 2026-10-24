import express from "express";
import { Router } from "express";
import {handleGetAnalytics, handleShortUrl, loadUrl} from "../controllers/url.js";

const router = Router();

router.post('/', handleShortUrl);
router.get('/:shortID' , loadUrl);
router.get('/analytics/:shortID' , handleGetAnalytics);

export default router;