import { AuthHelper } from '../middlewares/AuthHelper.js';
import db from '../models/index.js';

const authHelper = new AuthHelper();
export class GuestController {
  async guest(req, res, next) {
    try {
      const user = await db.User.findOne({
        where: { name: 'guest', provider: 'guest' },
      });
      const accessToken = authHelper.makeAccessToken(user.id);
      res.json({ accessTokent: accessToken });
    } catch (err) {
      console.error(err);
      next(err);
    }
  }
}
