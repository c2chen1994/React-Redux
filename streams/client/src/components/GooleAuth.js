import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "669197344899-pti8447chr89atrodcvn00ed3s3mbmua.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };

  onAuthChange = isSignedIn => {
    isSignedIn ? this.props.signIn() : this.props.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn)
      return (
        <button onClick={this.onSignOutClick} className="ui red goole button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    return (
      <button onClick={this.onSignInClick} className="ui red goole button">
        <i className="google icon" />
        Sign In With Google
      </button>
    );
  }

  render() {
    return <div> {this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
