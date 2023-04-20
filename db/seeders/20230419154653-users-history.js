const bcrypt = require('bcrypt');

const { User, History } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.create(
      {
        login: 'mrThomasTeller',
        password: '******',
        Histories: [
          {
            mainWord: 'Не кури',
            exception: 'динозавры',
          },
          {
            mainWord: 'акции ивановского завода яиц',
            exception: 'урал',
          },
          {
            mainWord: 'крокодилы',
            exception: 'динозавры',
          },
        ],
      },
      {
        include: [History],
      },
    );
  },

  async down(queryInterface, Sequelize) {
    await User.destroy({ truncate: { cascade: true } });
  },
};
