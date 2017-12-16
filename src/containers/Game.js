import React, { Component } from "react";
import { connect } from "react-redux";

import GameConfig from "./GameConfig";
import GameStats from "./GameStats";

class Game extends Component {
    render() {
        return (
            <div>
                <GameStats />
                <section id="gamePlane" className="clearfix" style={{width: "400px"}}>
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
                </section>
                <GameConfig />
            </div>
        )
    }
}

//Subscribe topic from root reducer
function mapAppStateToLocalProps(state) {
    return {

    }
}

export default connect(mapAppStateToLocalProps, null)(Game);