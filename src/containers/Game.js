import React, { Component } from "react";
import { connect } from "react-redux";

import { startGame, click } from "../actions/game_action";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSize: 4,
            planeWidth: 4 * 100
        }
    }
    componentWillReceiveProps({ game }) {

    }
    render() {
        let _pieceLeftCounter = 0;
        this.props.game.table.forEach((item) => item.positioned == false || item.positioned == null ? _pieceLeftCounter++ : null);
        return (
            <div>
                <header className="infoPanel">
                    <p>Zbývá umístit <span id="infoRest">{_pieceLeftCounter}</span> dílků.</p>
                    <p>Celkem tahů: <span id="infoTotal">{this.props.game.moveCounter}</span></p>
                </header>
                <section id="gamePlane" className="clearfix" style={{ width: this.state.planeWidth + "px" }}> {/*To je docela prasarna, nejde to jinak?*/}
                    {
                        this.props.game.table.map((piece, index) => {
                            return <p
                                onClick={() => this.props.click(piece.value)}
                                key={index}
                                className={(piece.value % 2 == 0 ? "odd " : "even ") + (piece.movable ? "movable " : "") + (piece.positioned ? "onPosition " : "") + "piece"}
                            >{piece.value}</p>
                        })
                    }
                </section>
                <footer className="infoPanel">
                    <p>
                        <button onClick={this.onGameCreate.bind(this)} id="createGame">Vytvořit</button> pole o hraně
                        <select value={this.state.selectedSize} onChange={this.onSelect.bind(this)} name="planeSize" >
                            <option>2</option>
                            <option>3</option>
                            <option>4</option> {/*WTF je => selected="selected"*/}
                            <option>5</option>
                        </select> dílků.
                    </p>
                </footer >
            </div >
        )
    }
    componentDidMount() {
        this.props.startGame(4);
    }
    /* EVENT DECLARATION */
    onSelect(meta) {
        this.setState({ selectedSize: meta.target.value });
    }
    onGameCreate() {
        this.setState({ planeWidth: this.state.selectedSize * 100 });
        this.props.startGame(this.state.selectedSize);
    }
    /* END OF EVENT DECLARATION */
}

//Subscribe topic from root reducer
function mapAppStateToLocalProps({ game }) {
    return {
        game
    }
}

export default connect(mapAppStateToLocalProps, { startGame, click })(Game);