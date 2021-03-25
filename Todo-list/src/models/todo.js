export default (sequelize, DataTypes) => {
  return sequelize.define(
    'todo',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      writer: {
        type: DataTypes.STRING,
        allowNULL: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNULL: false,
      },
      description: {
        type: DataTypes.STRING(300),
        allowNULL: false,
      },
      isCompleted: {
        type: DataTypes.BOOLEAN,
        allowNULL: false,
        defaultValue: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNULL: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamp: false,
      underscored: false,
    }
  );
};
