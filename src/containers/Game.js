import React, { Component } from "react";
import { connect } from "react-redux";

import { startGame } from "../actions/game_action";

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
        return (
            <div>
                <header className="infoPanel">
                    <p>Zbývá umístit <span id="infoRest">10</span> dílků.</p>
                    <p>Celkem tahů: <span id="infoTotal">0</span></p>
                </header>
                <section id="gamePlane" className="clearfix" style={{ width: this.state.planeWidth + "px" }}> {/*To je docela prasarna, nejde to jinak?*/}
                    {
                        this.props.game.table.map((piece, index) => {
                            return <p key={index} className={(piece.value % 2 == 0 ? "odd" : "even") + " piece"}>{piece.value}</p>
                        })
                    }
                    {/*
                    <p className="piece odd">5</p>
                    <p className="piece even">1</p>                    
                    <p className="piece odd">5</p>
                    <p className="piece even">1</p>
                    <p className="piece even onPosition">3</p>
                    <p className="piece odd onPosition">4</p>
                    <p className="piece even">9</p>
                    <p className="piece odd">2</p>
                    <p className="piece odd onPosition movable">7</p>
                    <p className="piece even onPosition">8</p>
                    <p className="piece odd">13</p>
                    <p className="piece even movable">6</p>
                    <p className="piece empty"></p>
                    <p className="piece odd movable">15</p>
                    <p className="piece odd">10</p>
                    <p className="piece even onPosition">14</p>
                    <p className="piece odd movable">12</p>
                    <p className="piece even">11</p>
                */}
                </section>
                <footer className="infoPanel">
                    <p>
                        <button onClick={this.onGameCreate.bind(this)} id="createGame">Vytvořit</button> pole o hraně
                        <select value={this.state.selectedSize} onChange={this.onSelect.bind(this)} name="planeSize" >
                            <option>2</option>
                            <option>3</option>
                            <option>4</option> {/*WTF je selected? selected="selected"*/}
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
        this.setState({ planeWidth: this.state.selectedSize * 100 });
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

export default connect(mapAppStateToLocalProps, { startGame })(Game);