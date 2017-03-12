// TODO - Add ability to auto import scripts from src/bots
// TODO - create a rs bot scripting library for use in other bots.
var essenceBot = require('./src/bots/essence-bot');

var botScript = process.argv[2];
console.log(botScript);


switch (botScript) {
    case 'essence':
        essenceBot.runBot();
        break;

    default:
        console.log('The script name that you have entered did not match any existing scripts, are you sure you typed it correctly?');
        break;
}