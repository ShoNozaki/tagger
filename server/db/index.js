// set up a database connection with the sqlite3 ORM of your choice.
// you'll need to refer to the docs for the exact set up.
// checkout the README for some tips for how to clear out your database.
var path = require('path');
var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: path.join(__dirname, '/tagger.sqlite')
    },
    useNullAsDefault: true
});
var db = require('bookshelf')(knex);

db.knex.schema.hasTable('notes').then((exists) => {
  if (!exists) {
		db.knex.schema.createTable('notes', (note) => {
			note.increments('id').primary();
			note.string('message', 255);
			note.string('title', 100);
			note.string('username', 50);
			//for login, 
			// note.integer('userId');
			note.timestamps();
		}).then((table) => {
			console.log('Created Table', table);
		});
  }
});


//refactor to add login

// db.knex.schema.hasTable('users').then((exists) => {
//   if (!exists) {
// 		db.knex.schema.createTable('user', (user) => {
// 		  user.increments('id').primary();
// 			user.string('username', 20).unique();
// 			user.string('password', 255);
// 			user.timestamps();
// 		}).then((table) => {
// 			console.log('Created Table', table);
// 		});
//   }
// });

module.exports = db;
