const { SequelizeStorage, Umzug } = require('umzug');
const sequelize = require('./db'); // Assuming db.js exports the Sequelize instance

const umzug = new Umzug({
    migrations: {glob: 'migrations/*.js'},
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({sequelize}),
    logger: console,                        // Use console for logging
});

module.exports = umzug;
