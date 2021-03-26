import express from 'express';
import { GithubOAuthController } from '../controllers/GithubOAuthController.js';
import { GoogleOAuthController } from '../controllers/GoogleOAuthController.js';
import { GuestController } from '../controllers/GuestController.js';

const router = express.Router();

const googleOAuthController = new GoogleOAuthController();
const githubOAuthController = new GithubOAuthController();
const guestController = new GuestController();

router.get('/google', googleOAuthController.call);
router.get('/github', githubOAuthController.get);
router.get('/guest', guestController.get);
router.get('/google/callback', googleOAuthController.callback);
router.get('/github/callback', githubOAuthController.callback);

export default router;
