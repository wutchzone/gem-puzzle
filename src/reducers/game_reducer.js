import { START_GAME } from "../actions/game_action";

import { GameState } from "../model/GemPuzzleModel";

let _gameInstance;

export default (state = {}, action) => {
    switch (action.type) {
        case START_GAME:
            _gameInstance = new GameState(action.size);
            state = { ...state, size: _gameInstance.size };
        default:
            return state;
    }
}