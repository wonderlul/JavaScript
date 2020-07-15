const createBoard = require("./boardModule");
const piecesFactory = require("./piecesFactoryModule");
const createCollisionChecker = require("./collisionCheckerModule");

const Game = require("./gameModule");

const gameBoard = createBoard.getInstance();
const collisionChecker = createCollisionChecker.getInstance();

const chessGame = new Game(gameBoard, piecesFactory, collisionChecker);
chessGame.play();
