import jsonwebtoken from 'jsonwebtoken';
import env from '../configs/index.js';
import db from '../models/index.js';

const signOptions = {
  algorithm: 'HS384',
};
export class AuthHelper {
  static isBearerToken(token) {
    return /Bearer\s[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/.test(token);
  }

  async currentUserChecker(req, res, next) {
    try {
      const bearerToken = req.headers.authorization;
      if (bearerToken === undefined) throw new Error('AccessToken이 없습니다.');
      if (AuthHelper.isBearerToken(bearerToken) === false) throw new Error('Token 형식이 올바르지 않습니다.');
      const token = bearerToken.split('Bearer ')[1];
      const id = AuthHelper.extractUserFromToken(token);
      req.user = await db.User.findOne({ where: { id } });
      if (req.user === null) res.status(403).send('로그인이 필요합니다.');
      next();
    } catch (err) {
      res.status(403).send({ message: err.message || '인증 과정에서 에러가 발생했습니다.' });
    }
  }

  makeAccessToken(userId) {
    const payload = { userId };
    const token = jsonwebtoken.sign(payload, env.PASSWORD_SECRET, signOptions);
    return token;
  }

  static extractUserFromToken(token) {
    try {
      const data = jsonwebtoken.verify(token, env.PASSWORD_SECRET, signOptions);
      if (data.userId === undefined) throw new Error('잘못된 토큰입니다.');
      return data.userId;
    } catch (err) {
      throw new Error(err);
    }
  }
}
