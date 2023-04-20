const authApiRouter = require('express').Router();
const bcrypt = require('bcrypt');


const { User } = requie('../../db/models');

authApiRouter.post('/register', (req, res) => {
  const { name, password, repeat } = req.body;

  if(password !== repeat) {
    res.status(403).json({ success: false, message: 'Пароли не совпадают'})ж
    return;
  }

  const existingUser = await User.findOne({where: {name}});
  if (existingUser) {
    res.status(409).json({success: false, message: 'Пользователь с таким логином уже существует'})
    return
  }

  const user = await User.create({ name, password: await bcrypt.hash(password, 5)})

  req.session.userId = user.id;

  res.status(201).json({success: true})
})