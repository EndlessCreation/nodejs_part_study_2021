import axios from 'axios';
import { AuthHelper } from '../middlewares/AuthHelper.js';
import db from '../models/index.js';

const authHelper = new AuthHelper();
export class GithubOAuthController {
  async get(req, res, next) {
    try {
      const Github_OAuth_User_GET = 'https://api.github.com/user';

      const headers = {
        Authorization: `token ${req.body.access_token}`,
      };
      console.log(headers);

      const name = await (await axios.get(Github_OAuth_User_GET, { headers })).data.name;
      const user = await db.User.findOrCreate({
        where: { name, provider: 'github' },
      });
      const accessToken = authHelper.makeAccessToken(user[0].id);
      res.json({ accessToken: accessToken });
    } catch (err) {
      console.error(err);
      next(err);
    }
  }
}
