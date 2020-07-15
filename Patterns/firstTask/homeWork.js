const createBoard = require("./boardModule");
const createMovement = require("./movementModule");
const createAction = require("./actionModule");
const createAdventure = require("./adventureModule");

let board = createBoard.getInstance();
let action = createAction.getInstance();
let movement = createMovement.getInstance();
let hunt = createAdventure.getInstance(board, action, movement);

hunt.begin();
