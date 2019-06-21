import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../ducks/auth_reducer";
import { Redirect } from "react-router-dom";
import BotList from "../BotList/BotList";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      bots: []
    };
  }
  componentDidMount() {
    if (this.props.id) {
      axios.get("/api/bots").then(res => {
        console.log(res.data);
        this.setState({
          bots: res.data
        });
      });
    }
  }

  delete = id => {
    axios.delete(`/api/bot/${id}`).then(res => {
      this.setState({
        bots: res.data
      });
    });
  };

  render() {
    if (!this.props.id) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <h1>Dashboard</h1>
        <BotList bots={this.state.bots} delete={this.delete} />
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
  { updateUser }
)(Dashboard);
