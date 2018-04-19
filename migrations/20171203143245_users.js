exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('Job_Details', function(table) {
            table.increments();
            table.string('Company', 100).notNull();
            table.string('Position', 100).notNull();
            table.string('City', 45).notNull();
            table.string('State', 45).notNull();
            table.date('Date').notNull();
            table.enum('Reply',['Yes','No']).notNull();
            table.enum('Status',['Accepted','Rejected','NA']).notNull();
            table.unique(['Company','Position'],'uniqueIndex')
        })
    ])
}

exports.down = function(knex, Promise) {
    return Promise.all([knex.schema.dropTable('Job_Details')])
}
