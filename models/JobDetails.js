const bookshelf = require('../config/bookshelf')

const Job_Details = bookshelf.Model.extend({
    tableName: 'Job_Details'
},
{
    create: function(data) {
        return this.forge(data).save()
    },
    update: function(data,new_data){
        return this.forge().query({where:data}).save(new_data,{method: 'update'})
    }
})

module.exports = Job_Details