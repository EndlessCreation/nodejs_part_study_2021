import express from 'express';
import { GoogleOAuthController } from '../controllers/GoogleOAuthController.js';
import { GuestController } from '../controllers/GuestController.js';

const router = express.Router();

const googleOAuthController = new GoogleOAuthController();
const guestController = new GuestController();

router.get('/google', googleOAuthController.google);
// router.get('/github', TestController.index);
router.get('/guest', guestController.guest);
router.get('/google/callback', googleOAuthController.googleCallback);
// router.get('/github/callback', TestController.index);

export default router;
