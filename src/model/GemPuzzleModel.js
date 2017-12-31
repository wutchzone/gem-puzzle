class Piece {
    constructor(value) {
        this.value = value;
        this.style = "font-size: " + (Math.random() * 2 + 1) + "rem;";
    }
}

export class GameState {

    constructor(size) {
        this.board = [];
        let counter = 1;
        for (let i = 0; i < size; i++) {
            this.board[i] = [];
            for (let j = 0; j < size; j++) {
                if (counter == size * size)
                    this.board[i][j] = new Piece(null);
                else
                    this.board[i][j] = new Piece(counter++);
            }
        }
    }

    get size() {
        return this.board.length;
    }

    getNeighbours(pieceValue) {
        var pc = this.getPieceCoordinates(pieceValue);
        if (pc) {
            var result = [];
            if (pc.x > 0) result.push(this.getPieceValue(pc.x - 1, pc.y));
            if (pc.y > 0) result.push(this.getPieceValue(pc.x, pc.y - 1));
            if (pc.x < this.size - 1) result.push(this.getPieceValue(pc.x + 1, pc.y));
            if (pc.y < this.size - 1) result.push(this.getPieceValue(pc.x, pc.y + 1));
            return result;
        }
        return false;
    }

    doMove(pieceValue) {
        if (this.isMovable(pieceValue)) {
            var pc = this.getPieceCoordinates(pieceValue);
            var ec = this.getPieceCoordinates(null);
            let temp = this.board[pc.x][pc.y];
            this.board[pc.x][pc.y] = this.board[ec.x][ec.y];
            this.board[ec.x][ec.y] = temp;
            return true;
        }
        return false;
    }

    doRandomMove() {
        var n = this.getNeighbours(null);
        if (n) {
            this.doMove(n[Math.floor(Math.random() * n.length)]);
        }
    }

    getPieceValue(x, y) {
        if ((x < this.size) && (y < this.size))
            return this.board[x][y].value;
        else
            return false;
    }

    getPieceCoordinates(pieceValue) {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.board[i][j].value == pieceValue)
                    return { x: i, y: j };
            };
        };
        return false;
    }

    isMovable(pieceValue) {
        var pc = this.getPieceCoordinates(pieceValue);
        var ec = this.getPieceCoordinates(null);
        if (pc && ec) {
            var dx = Math.abs(pc.x - ec.x);
            var dy = Math.abs(pc.y - ec.y);
            if ((dx == 0 && dy == 1) || (dx == 1 && dy == 0))
                return true;
        }
        return false;
    }

    shouldBe(pieceValue) {
        var pc = this.getPieceCoordinates(pieceValue);
        if (pc) {
            var expectedValue = ((pc.x) * this.board.length + (pc.y + 1));
            if (expectedValue == this.size * this.size) return null;
            else return expectedValue;
        }
        return false;
    }

    getProperties(pieceValue) {
        var pc = this.getPieceCoordinates(pieceValue);
        if (pc) {
            var result = { x: pc.x, y: pc.y, value: pieceValue };
            result.movable = this.isMovable(pieceValue);
            if (pieceValue == this.shouldBe(pieceValue))
                result.positioned = true;
            else
                result.positioned = false;
            return result;
        }
        return false;
    }
};