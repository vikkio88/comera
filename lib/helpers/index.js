const chalk = require('chalk');


const logError = message => {
    console.log(chalk.red(chalk.bold(message)));
};

const logSuccess = message => {
    console.log(chalk.green(chalk.bold(message)));
};

const log = message => console.log(chalk.bold(message));

const search = ({ s: tags }) => {
    tags = tags.split(','),
    console.log(tags);
};

module.exports = {
    search,
    log,
    logError,
    logSuccess
};