var goodreadService = function() {
    var getBookById = function(id, callback) {
        callback(null, {
            description: "our local description"
        });
    }
    
    return {
        getBookById: getBookById
        };
}


module.exports = goodreadService;