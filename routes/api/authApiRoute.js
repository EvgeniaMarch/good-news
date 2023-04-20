const authApiRouter = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

authApiRouter.post('/registration', async (req, res) => {
  const { login, password, repeat } = req.body;
  console.log('rq.body', req.body);

  if (password !== repeat) {
    res.status(403).json({ success: false, message: 'Пароли не совпадают' });
    return;
  }

  const existingUser = await User.findOne({ where: { login } });
  if (existingUser) {
    res.status(409).json({
      success: false,
      message: 'Пользователь с таким логином уже существует',
    });
    return;
  }

  const user = await User.create({
    login,
    password: await bcrypt.hash(password, 5),
  });

  console.log(user);

  req.session.userId = user.id;

  res.status(201).json({ success: true });
});
module.exports = authApiRouter;
