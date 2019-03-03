import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  render() {
    //const user = this.props.users.find(user => user.id === this.props.id);
    const { user } = this.props;
    if (!user) return null;
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.id) };
};

export default connect(mapStateToProps)(UserHeader);