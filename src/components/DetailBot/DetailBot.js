import React, { Component } from "react";
import axios from "axios";

export default class DetailBot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bot: {
        bot_name: "",
        attack: 0,
        health: 0,
        id: 0
      }
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/bot/${id}`).then(res => {
      console.log(res.data);
      this.setState({
        bot: res.data
      });
    });
  }

  handleInput = e => {
    this.setState({
      bot: {
        ...this.state.bot,
        [e.target.name]: e.target.value
      }
    });
  };

  update = e => {
    e.preventDefault();

    const { id, bot_name, attack, health } = this.state.bot;

    axios
      .put(`/api/bot/${id}`, { name: bot_name, attack, health })
      .then(res => {
        this.props.history.push("/");
      });
  };

  render() {
    const { attack, bot_name, email, health } = this.state.bot;
    return (
      <div>
        <h1>{email}</h1>
        <form
          onSubmit={this.update}
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
            name="bot_name"
            value={bot_name}
            onChange={this.handleInput}
            required
          />
          <label>Attack</label>
          <input
            type="number"
            placeholder="Attack"
            name="attack"
            value={attack}
            onChange={this.handleInput}
            required
          />
          <label>Health</label>
          <input
            type="number"
            placeholder="Health"
            name="health"
            value={health}
            onChange={this.handleInput}
            required
          />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
