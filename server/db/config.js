var Sequelize = require('sequelize');

// Create Connection
var sequelize = new Sequelize('main', null, null, {
  dialect: 'sqlite',
  storage: 'db/myFavoriteRest.sqlite'
});

// Define a model on the connection
var User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

var Favorite = sequelize.define('Favorite', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  bizName: Sequelize.STRING,
  bizLocation: Sequelize.STRING,
  bizRating: Sequelize.STRING,
  bizImage: Sequelize.STRING,
  bizCategories: Sequelize.STRING,
});

    
// foreignKey: 'fk_company'

// Create Associations
User.hasMany(Favorite);
// var Favorited = Favorites.belongsTo(User, {as: 'favorited'});
Favorite.belongsTo(User);


// Create tables, {force: true} <- drops the table if it exists
User.sync().then(function() {
  // return User.create({username: 'Julie', password: '123'});
});
Favorite.sync();

// User.sync({force: true});
// Favorites.sync({force: true});
// User.create({username: 'Julie', password: '123'});

exports.User = User;
exports.Favorite = Favorite;

