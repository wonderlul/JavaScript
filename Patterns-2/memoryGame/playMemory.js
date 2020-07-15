const createBoard = require("./boardModule");
const actionModule = require("./actionModule");
const playerFactory = require("./playerFactoryModule");

const Game = require("./gameModule");

const memoryBoard = createBoard.getInstance();

const playerOne = playerFactory.createPlayer(memoryBoard);
const playerTwo = playerFactory.createPlayer(memoryBoard);
const playerThree = playerFactory.createPlayer(memoryBoard);
const players = [playerOne, playerTwo];

const actions = actionModule.getInstance();

const memoryGame = new Game(memoryBoard, players, actions);
memoryGame.play();
