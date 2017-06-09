var controller = require('./controllers');
var router = reequire('express').Router();

router.get('notes', controller.notes.get);
router.post('notes', controller.notes.post);


//refactor for specific users

// router.get('users', controller.users.get);
// router.post('users', controller.users.post);
