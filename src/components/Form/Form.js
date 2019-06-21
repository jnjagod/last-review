import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      attack: 0,
      health: 0
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  create = e => {
    e.preventDefault();

    const { name, attack, health } = this.state;

    axios.post("/api/bot", { name, attack, health }).then(res => {
      this.props.history.push("/");
    });
  };

  render() {
    if (!this.props.id) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <h1>Create Bot</h1>
        <form
          onSubmit={this.create}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <label>Bot Name</label>
          <input
            type="text"
            placeholder="Bot Name"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
            required
          />
          <label>Attack</label>
          <input
            type="number"
            placeholder="Attack"
            name="attack"
            value={this.state.attack}
            onChange={this.handleInput}
            required
          />
          <label>Health</label>
          <input
            type="number"
            placeholder="Health"
            name="health"
            value={this.state.health}
            onChange={this.handleInput}
            required
          />
          <button>Create</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    id: state.authReducer.id
  };
}

export default connect(mapStateToProps)(Form);
