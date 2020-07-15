const createBoard = require("./boardModule");
const createChecker = require("./checkerModule");

const Game = require("./gameModule");
const Vector = require("./vectorModule");
const Update = require("./updateModule");

const vector = new Vector();
const update = new Update();

const board = createBoard.getInstance();
const positionChecker = createChecker.getInstance();

const bounceGame = new Game(board, vector, positionChecker, update);
bounceGame.play();
