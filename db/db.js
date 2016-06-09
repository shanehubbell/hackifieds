var Sequelize = require('sequelize');

// create database connection
var db = new Sequelize('HackBnB', 'root', 'password');

// User model
var Listing = db.define('Listing', {
  listingId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: Sequelize.STRING },
  address: { type: Sequelize.STRING },
  lat: { type: Sequelize.STRING },
  lng: { type: Sequelize.STRING },
  distanceToHackReactor: { type: Sequelize.STRING },
  price: { type: Sequelize.STRING },
  bathrooms: { type: Sequelize.STRING },
  shared: { type: Sequelize.BOOLEAN },
  ownerName: { type: Sequelize.STRING },
  ownerEmail: { type: Sequelize.STRING },
  pictures: { type: Sequelize.STRING },
  description: { type: Sequelize.TEXT },
}, {
  timestamps: false,
});

db.sync().then(() => console.log('done db'));

// // User model
// var User = db.define('User', {
//   userId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
//   username: { type: Sequelize.STRING(100), allowNull: true },
//   firstName: { type: Sequelize.STRING(100), allowNull: true },
//   lastName: { type: Sequelize.STRING(100), allowNull: true },
//   email: { type: Sequelize.STRING(100), allowNull: true },
//   phone: Sequelize.STRING(100),
//   school: { type: Sequelize.STRING(100), allowNull: true },
//   cohort: { type: Sequelize.STRING(100), allowNull: true }
// });

// // Category model
// var Category = db.define('Category', {
//   'categoryId': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
//   'categoryName': {type: Sequelize.STRING(25), allowNull: false}
// });

// // Listing model
// var Listing = db.define('Listing', {
//   listingId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
//   title: { type: Sequelize.STRING(100), allowNull: false },
//   description: { type: Sequelize.TEXT, allowNull: false },
//   location: { type: Sequelize.STRING(100), allowNull: false },
//   price: { type: Sequelize.DECIMAL(10, 2) },
//   startDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
//   endDate: { type: Sequelize.DATE }
// });

// // Image model
// var Image = db.define('Image', {
//   imageId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
//   path: { type: Sequelize.TEXT, allowNull: false }
// });

// // define foreign key relationships
// User.hasMany(Listing, { foreignKey: { name: 'userId', allowNull: false } });
// Listing.belongsTo(User, { foreignKey: { name: 'userId', allowNull: false } });
// Category.hasMany(Listing, { foreignKey: { name: 'categoryId', allowNull: false } });
// Listing.belongsTo(Category, { foreignKey: { name: 'categoryId', allowNull: false } });
// Listing.hasMany(Image, { foreignKey: { name: 'listingId', allowNull: false } });
// Image.belongsTo(Listing, { foreignKey: { name: 'listingId', allowNull: false } });

// // Sync database
// User.sync()
//   .then( function () {
//     console.log( 'Created (or fetched existing) Users table.' );
//   })
//   .catch( function (err) {
//     console.log( 'Unable to create/fetch Users table: ' + err );
//   });

// Category.sync()
//   .then( function () {
//     console.log( 'Created (or fetched existing) Categories table.' );
//   })
//   .catch( function (err) {
//     console.log( 'Unable to create/fetch Categories table: ' + err );
//   });

// Listing.sync()
//   .then( function () {
//     console.log( 'Created (or fetched existing) Listings table.' );
//   })
//   .catch( function (err) {
//     console.log( 'Unable to create/fetch Listings table: ' + err );
//   });

// Image.sync()
//   .then( function () {
//     console.log( 'Created (or fetched existing) Images table.' );
//   })
//   .catch( function (err) {
//     console.log( 'Unable to create/fetch Images table: ' + err );
//   });

// db.sync()
// // db.sync( { force: true } ) // use this line instead of above to overwrite with new schemas
//   .then( function () {
//     console.log( 'Connection to hackifieds database opened' );
//   })
//   .catch( function (err) {
//     console.log( 'Error opening hackifieds database: ' + err );
//   });

// exports.User = User;
// exports.Category = Category;
// exports.Listing = Listing;
// exports.Image = Image;

