export const START_GAME = "start_game";
export const CLICK = "click";

export function startGame(gameSize) {
    return {
        type: START_GAME,
        size: gameSize
    }
}

export function click(card) {

}