import React, { Component } from "react";
import { connect } from "react-redux";

class GameStats extends Component {
    render() {
        return (
            <footer className="infoPanel">
                <p>
                    <button id="createGame">Vytvořit</button> pole o hraně
                    <select name="planeSize">
                        <option>2</option>
                        <option>3</option>
                        <option selected="selected">4</option>
                        <option>5</option>
                    </select> dílků.
                </p>
            </footer>
        )
    }
}

//Subscribe topic from root reducer
function mapAppStateToLocalProps(state) {
    return {

    }
}

export default connect(mapAppStateToLocalProps, null)(GameStats);