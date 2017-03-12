// TODO - add documentation & move some functions to a rs-bot-library
var robot = require('robotjs');

function runBot() {
    console.log('The essence bot has been started');

    robot.moveMouseSmooth(randomVal(500, 100), randomVal(500, 100));;
    robot.mouseClick();
    robot.keyToggle('4', 'down');

    loopMapMovement();
}

function loopMapMovement() {
    var randomv = randomVal(300000, 1);

    setTimeout(function () {
        moveMapRandomly();
        loopMapMovement();
    }, randomv);
}

function moveMapRandomly() {
    var keyNum = Math.floor(Math.random() * 4);

    switch (keyNum) {
        case 0:
            moveMapUp(randomVal(300, 100));
            resetKeyboardDelay();
            break;
        case 1:
            moveMapDown(randomVal(300, 100));
            resetKeyboardDelay();
            break;
        case 2:
            moveMapLeft(randomVal(300, 100));
            resetKeyboardDelay();
            break;
        case 3:
            moveMapRight(randomVal(300, 100));
            resetKeyboardDelay();
            break;
        default:
            console.log('Somehow the generated number was outside the range. The value was: ' + keyNum);
            break;
    }
}

function resetKeyboardDelay() {
    robot.setKeyboardDelay
}

function moveMapUp(length) {
    robot.setKeyboardDelay(length);
    robot.keyToggle('up', 'down');
    robot.keyToggle('up', 'up');
}

function moveMapDown(length) {
    robot.setKeyboardDelay(length);
    robot.keyToggle('down', 'down');
    robot.keyToggle('down', 'up');
}

function moveMapLeft(length) {
    robot.setKeyboardDelay(length);
    robot.keyToggle('left', 'down');
    robot.keyToggle('left', 'up');
}

function moveMapRight(length) {
    robot.setKeyboardDelay(length);
    robot.keyToggle('right', 'down');
    robot.keyToggle('right', 'up');
}

function randomVal(max, min) {
    var val = Math.floor((Math.random() * (max - min)) + min);
    return val;
}

module.exports.runBot = runBot;