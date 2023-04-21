const bcrypt = require('bcrypt');

const { User, History } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate(
      [
        {
          login: 'Женя',
          password: await bcrypt.hash('123', 5),
          Histories: [
            {
              mainWord: 'Вызов фильм',
              exception: 'Что-нибудь',
            },
            {
              mainWord: 'Эльбрус',
              exception: 'Москва',
            },
            {
              mainWord: 'крокодилы',
              exception: 'динозавры',
            },
          ],
        },
        {
          login: 'Ваня',
          password: await bcrypt.hash('123', 5),
          Histories: [
            {
              mainWord: 'Вызов фильм',
              exception: 'Что-нибудь',
            },
            {
              mainWord: 'Эльбрус',
              exception: 'Москва',
            },
            {
              mainWord: 'фильмы',
              exception: 'динозавры',
            },
          ],
        },
        {
          login: 'Юля',
          password: await bcrypt.hash('123', 5),
          Histories: [
            {
              mainWord: 'Вызов фильм',
              exception: 'Что-нибудь',
            },
            {
              mainWord: 'Эльбрус',
              exception: 'Москва',
            },
            {
              mainWord: 'аллигаторы',
              exception: 'динозавры',
            },
          ],
        },
        {
          login: 'Ролан',
          password: await bcrypt.hash('123', 5),
          Histories: [
            {
              mainWord: 'Фильмы',
              exception: 'Что-нибудь',
            },
            {
              mainWord: 'Эльбрус',
              exception: 'Москва',
            },
            {
              mainWord: 'аллигаторы',
              exception: 'динозавры',
            },
          ],
        },
      ],
      {
        include: [History],
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await User.destroy({ truncate: { cascade: true } });
  },
};
