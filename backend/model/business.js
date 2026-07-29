const { DataTypes } = require('sequelize');

const businessModel = (db) => {
  const Business = db.define('Business', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    businessType: {
      type: DataTypes.ENUM(
        'hospital',
        'school',
        'store',
        'hotel',
        'restaurant',
        'retail',
        'coaching',
        'clinic',
        'realestate',
        'automobile',
        'custom'
      ),
      allowNull: false
    },
    customBusinessType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    businessName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, { timestamps: true });

  return Business;
};

module.exports = businessModel;
