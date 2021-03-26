export default (sequelize, DataTypes) => {
  return sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNULL: false,
        unique: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNULL: false,
        defaultValue: DataTypes.NOW,
      },
      provider: {
        type: DataTypes.STRING(10),
        allowNUUL: false,
        unique: false,
      },
    },
    {
      timestamp: false,
      underscored: false,
    }
  );
};
