import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateUser } from "./ducks/auth_reducer";
import routes from "./routes";
import axios from "axios";
import Nav from "./components/Nav/Nav";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    axios
      .get("/auth/current")
      .then(res => {
        this.props.updateUser(res.data);
      })
      .catch(err => {
        console.log("Not logged in");
      });
  }

  render() {
    return (
      <div className="App">
        {this.props.id ? <Nav /> : null}
        {routes}
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
)(withRouter(App));
