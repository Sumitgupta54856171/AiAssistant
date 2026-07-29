const sequelize = require('sequelize');

const db = new sequelize('mydatabase', 'postgres', 'Ashish12345687', {
  host: 'localhost',
  dialect: 'postgres'
});
const connectToDatabase = async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = { db, connectToDatabase };