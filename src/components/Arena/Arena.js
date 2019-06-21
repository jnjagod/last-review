import React, { Component } from "react";
import { connect } from "react-redux";
import { battle } from "../../ducks/bot_reducer";

class Arena extends Component {
  constructor() {
    super();

    this.state = {
      bots: []
    };
  }

  battle() {}

  render() {
    let userBots = this.props.bots.map(bot => {
      return (
        <div>
          <h2>{bot.bot_name}</h2>
          <p>Attack: {bot.attack}</p>
          <p>Health: {bot.health}</p>
        </div>
      );
    });

    return (
      <div>
        <h1>Arena</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          {userBots[0]} {userBots[0] && userBots[1] ? "vs" : null}
          {userBots[1]}
        </div>
        {userBots[0] && userBots[1] ? (
          <button onClick={this.props.battle}>Fight!</button>
        ) : null}
        <br />
        <div style={{ marginTop: "40px" }}>
          {this.props.winner.bot_name ? (
            <h1>THE WINNER IS {this.props.winner.bot_name}!</h1>
          ) : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    id: state.authReducer.id,
    bots: state.botReducer.bots,
    winner: state.botReducer.winner
  };
}

export default connect(
  mapStateToProps,
  { battle }
)(Arena);
