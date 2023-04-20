const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: "user_id" });
    }
  }
  History.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mainWord: {
        type: DataTypes.TEXT,
      },
      exception: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "History",
    },
  );
  return History;
};
