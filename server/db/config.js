var Sequelize = require('sequelize');

// Create Connection
var sequelize = new Sequelize('main', null, null, {
  dialect: 'sqlite',
  storage: 'myFavoriteRest.sqlite'
});

// Define a model on the connection
var User = sequelize.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

var Favorites = sequelize.define('Favorites', {
  restaurant: Sequelize.STRING
});

// Create Associations
Favorites.belongsTo(User);
User.hasMany(Favorites);

// Create tables, {force: true} <- drops the table if it exists
User.sync({force: true});
Favorites.sync();

exports.User = User;
exports.Favorites = Favorites;


