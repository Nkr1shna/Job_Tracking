const bookshelf = require('../config/bookshelf')
const Job_Detail = require('../models/JobDetail')
var Job_Details = bookshelf.Collection.extend({
    model: Job_Detail
});

module.exports = Job_Details