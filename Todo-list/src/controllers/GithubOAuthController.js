import axios from 'axios';
import env from '../configs/index.js';
import { AuthHelper } from '../middlewares/AuthHelper.js';
import db from '../models/index.js';

const authHelper = new AuthHelper();
export class GithubOAuthController {
  async get(req, res, next) {
    try {
      const Github_OAuth_GET = `https://github.com/login/oauth/authorize?scope=read:user&client_id=${env.GITHUB.CLIENT_ID}`;

      res.redirect(Github_OAuth_GET);
    } catch (err) {
      console.error(err);
      next(err);
    }
  }

  async callback(req, res, next) {
    try {
      const Github_OAuth_Callback_POST = 'https://github.com/login/oauth/access_token';
      const Github_OAuth_User_GET = 'https://api.github.com/user';

      const body = {
        client_id: env.GITHUB.CLIENT_ID,
        client_secret: env.GITHUB.CLIENT_SECRET,
        code: req.query.code,
      };
      const options = { headers: { accept: 'application/json' } };
      const githubToken = (await axios.post(Github_OAuth_Callback_POST, body, options)).data.access_token;

      const headers = {
        Authorization: `token ${githubToken}`,
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
