var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
        {
            title: 'Secret City',
            genre: 'Thriller',
            author: 'Steve Lewis & Chris Uhlmann',
            read: false
        },
        
        {
            title: 'Slow Cooker Central 2',
            genre: 'Food',
            author: 'Paulene Christie',
            read: true
        },
        
        {
            title: 'Forces Of Nature',
            genre: 'Science',
            author: 'Brian Cox',
            read: false
        },
        
        {
            title: 'Penguin Bloom',
            genre: 'Photography',
            author: 'Bradley Trevor Greive',
            read: true
        },
        
        {
            title: 'The Summer Before the War',
            genre: 'Historical Fiction',
            author: 'Helen Simonson',
            read: false
        },
    ];

var router = function(nav) {
    
    adminRouter.route('/addBooks').get(function(req, res) {
        var url = 'mongodb://localhost:27017/libraryApp';
        mongodb.connect(url, function(err, db) {
            var collection = db.collection('books');
            collection.insertMany(books, function(err, results) {
                res.send(results);
                db.close();
            });
        });
        
    });
    return adminRouter;
};

module.exports = router;