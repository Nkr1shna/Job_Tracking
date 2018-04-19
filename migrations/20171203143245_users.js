exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('Job_Details', function(table) {
            table.increments();
            table.string('Company', 30).notNull();
            table.string('Position', 45).notNull();
            table.string('City', 45).notNull();
            table.string('State', 45).notNull();
            table.date('Date').notNull();
            table.enum('Reply',['Yes','No']).notNull();
            table.enum('Status',['Accepted','Rejected','NA']).notNull();
        })
    ])
}

exports.down = function(knex, Promise) {
    return Promise.all([knex.schema.dropTable('Job_Details')])
}
