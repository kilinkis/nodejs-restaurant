const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', catchErrors(storeController.getStores));
router.get('/stores', catchErrors(storeController.getStores));
router.get('/add', storeController.addStore);
router.post('/add', catchErrors(storeController.createStore));

// Do work here
// router.get('/', (req, res) => {
//   console.log('hey there!');
//   // const wex = { name: 'kilinkis', names: 'kilinkis2' };
//   // res.json(wex);
//   // res.json(req.query); // returns query string
//   res.render('hello', { name: 'kilinkis' } );
// });

// example to access url variable
// router.get('/reverse/:name', (req, res) => {
//   const reverse = [...req.params.name].reverse().join('');
//   res.send(reverse);
// });

module.exports = router;
