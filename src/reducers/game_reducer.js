import { START_GAME } from "../actions/game_action";

import { GameState } from "../model/GemPuzzleModel";

let _gameInstance;

export default (state = { table: [] }, action) => {
    switch (action.type) {
        case START_GAME:
            _gameInstance = new GameState(action.size);
            let _table = [];
            for (var i = 0; i < _gameInstance.size * _gameInstance.size; i++) _gameInstance.doRandomMove();
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
            state = { ...state, size: _gameInstance.size, table: _table };
        default:
            return state;
    }
}