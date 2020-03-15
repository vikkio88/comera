const argv = require('minimist')(process.argv.slice(2));
const { search, log, logError } = require('./lib/helpers');

const { s, w } = argv;

const MODES = {
    SEARCH: 'searchMode',
    WRITE: 'writeMode'
};

const actions = {
    [MODES.SEARCH]: search,
};

const switches = {
    [MODES.SEARCH]: s,
    [MODES.WRITE]: w,
};

const main = async () => {
    const filteredSwitches = Object.keys(switches).filter(mode => {
        return Boolean(switches[mode]);
    });

    if (filteredSwitches.length !== 1) {
        logError('You need to select one mode');
        log('-s : SEARCH');
        log('-w : WRITE');
        process.exit(-1);
    }

    const mode = filteredSwitches[0];
    const action = actions[mode];

    action({ s, w });
};

main();