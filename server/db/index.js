// set up a database connection with the sqlite3 ORM of your choice.
// you'll need to refer to the docs for the exact set up.
// checkout the README for some tips for how to clear out your database.

const Sequelize = require('sequelize');
const sequelize = new Sequelize ('tagger', 'student', 'student', {
    host: 'localhost',
    dialect: 'mysql'
})
 sequelize
  .authenticate()
  .then(() => {
      console.log('Connection Established');
  }) 
  .catch( (err) => {
      console.log('Unable to Connect');
  })


const Notes = sequelize.define('note', {
    message: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.STRING,
    },
    title: {
        type: Sequelize.STRING
    },
}) 

Notes.sync({force:true});

//refactor for login

// const Users = sequelize.define('user', {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false
//     },
//     username: {
//         type: Sequelize.STRING
//     },
//     password: {
//         type: Sequelize.STRING
//     }
// })

module.exports = Notes;