import googleapis from 'googleapis';
import env from '../configs/index.js';
import { AuthHelper } from '../middlewares/AuthHelper.js';
import db from '../models/index.js';

const { google } = googleapis;
const oauth2Client = new google.auth.OAuth2(env.GOOGLE.CLIENT_ID, env.GOOGLE.CLIENT_SECRET, env.GOOGLE.REDIRECT_URL);
const authHelper = new AuthHelper();
export class GoogleOAuthController {
  async get(req, res, next) {
    try {
      const tokens = {
        expiry_date: req.body.expiry_date,
        access_token: req.body.access_token,
        token_type: req.body.token_type,
        id_token: req.body.id_token,
        scope: req.body.scope,
      };
      oauth2Client.setCredentials(tokens);
      google.options({ auth: oauth2Client });

      const people = google.people({
        version: 'v1',
        auth: oauth2Client,
      });
      const me = await people.people.get({
        resourceName: 'people/me',
        personFields: 'names',
      });

      const name = me.data.names.length ? me.data.names[0].displayName : 'Google User';
      console.log(name);
      const user = await db.User.findOrCreate({
        where: { name, provider: 'google' },
      });
      const accessToken = authHelper.makeAccessToken(user[0].id);
      res.json({ accessToken: accessToken });
    } catch (err) {
      console.error(err);
      next(err);
    }
  }
  async callback(req, res, next) {
    try {
      const { tokens } = await oauth2Client.getToken(req.query.code);
      oauth2Client.setCredentials(tokens);
      google.options({ auth: oauth2Client });

      const people = google.people({
        version: 'v1',
        auth: oauth2Client,
      });
      const me = await people.people.get({
        resourceName: 'people/me',
        personFields: 'names',
      });

      const name = me.data.names.length ? me.data.names[0].displayName : 'Google User';
      console.log(name);
      const user = await db.User.findOrCreate({
        where: { name, provider: 'google' },
      });
      const accessToken = authHelper.makeAccessToken(user[0].id);
      res.json({ accessToken: accessToken });
    } catch (err) {
      console.error(err);
      next(err);
    }
  }
}
