const {DataTypes} = require('sequelize');

const registerModel = (db) => {
  const User = db.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    provider:{
        type: DataTypes.ENUM('google', 'local'),
        defaultValue: 'local'
    },
    googleId:{
        type:DataTypes.STRING,
        allowNull:true,
        unique:true
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isEmailVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    role:{
        type: DataTypes.ENUM('user', 'admin'),
        defaultValue: 'user'
    },
    otpCode:{
        type: DataTypes.STRING,
        allowNull: true
    },
    otpExpiry:{
        type: DataTypes.DATE,
        allowNull: true
    },
    isActive:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    
},{timestamps:true});

  return User;
};

module.exports = registerModel;