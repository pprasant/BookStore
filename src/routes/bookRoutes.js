var express = require('express');
var bookRouter = express.Router();


var router = function(nav) {
    
    var bookService = require('../services/goodreadService')();
    
    var bookController = require('../controllers/bookController')(bookService, nav);

        bookRouter.use(bookController.middleware);
        
        bookRouter.route('/').get(bookController.getByIndex);

        bookRouter.route('/:id').get(bookController.getById);
        
        return bookRouter;

};


module.exports = router;