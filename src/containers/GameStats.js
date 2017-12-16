import React, { Component } from "react";
import { connect } from "react-redux";

class GameStats extends Component {
    render() {
        return (
            <header className="infoPanel">
                <p>Zbývá umístit <span id="infoRest">10</span> dílků.</p>
                <p>Celkem tahů: <span id="infoTotal">0</span></p>
            </header>
        )
    }
}

//Subscribe topic from root reducer
function mapAppStateToLocalProps(state) {
    return {

    }
}

export default connect(mapAppStateToLocalProps, null)(GameStats);