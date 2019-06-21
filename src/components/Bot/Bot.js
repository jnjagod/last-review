import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setBot } from "../../ducks/bot_reducer";

class Bot extends Component {
  setBot = bot => {
    this.props.setBot(bot);
    this.props.history.push("/arena");
  };

  render() {
    const { id, user_id, bot_name, attack, health } = this.props.bot;
    return this.props.id === user_id ? (
      <div style={{ border: "1px solid black", padding: "20px 40px" }}>
        <Link to={`/detail/${id}`}>
          <h2>{bot_name}</h2>
          <p>Health: {health}</p>
          <p>Attack: {attack}</p>
        </Link>
        <button style={{ zIndex: 5 }} onClick={() => this.props.delete(id)}>
          Delete
        </button>
        <button
          style={{ zIndex: 5 }}
          onClick={() => this.setBot(this.props.bot)}
        >
          Battle
        </button>
      </div>
    ) : (
      <div
        to={`/detail/${id}`}
        style={{ border: "1px solid black", padding: "20px 40px" }}
      >
        <h2>{bot_name}</h2>
        <p>Health: {health}</p>
        <p>Attack: {attack}</p>
        <button
          style={{ zIndex: 5 }}
          onClick={() => this.setBot(this.props.bot)}
        >
          Battle
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    id: state.authReducer.id
  };
}

export default connect(
  mapStateToProps,
  { setBot }
)(withRouter(Bot));
