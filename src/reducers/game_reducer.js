import { START_GAME, CLICK } from "../actions/game_action";

import { GameState } from "../model/GemPuzzleModel";

let _gameInstance;

export default (state = { table: [], moveCounter: 0 }, action) => {
    switch (action.type) {
        case START_GAME:
            _gameInstance = new GameState(action.size);
            for (var i = 0; i < _gameInstance.size * _gameInstance.size; i++) _gameInstance.doRandomMove();
            state = { ...state, size: _gameInstance.size, table: getValuesForBoard() };
        case CLICK:
            var _newState = {}
            if (_gameInstance.doMove(action.id)) {
                _newState.moveCounter = state.moveCounter + 1;
                _newState.table = getValuesForBoard()
            }
            return { ...state, ..._newState };
        default:
            return state;
    }
}

function getValuesForBoard() { //není lepší dát nějakou takovou metodu do modelu?
    var _table = [];
    for (var i = 0; i < _gameInstance.size; i++) {
        for (var j = 0; j < _gameInstance.size; j++) {
            let value = _gameInstance.getPieceValue(i, j);
            let pieceState = _gameInstance.getProperties(value);

            _table.push({
                value,
                pieceState,
                positioned: pieceState.positioned,
                movable: pieceState.movable
            })
        }
    }
    return _table;
}