import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
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
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onSignIn = () => {
    this.auth.signIn();
  };
  onSignOut = () => {
    this.auth.signOut();
  };

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn)
      return (
        <button onClick={this.onSignOut} className="ui red goole button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    return (
      <button onClick={this.onSignIn} className="ui red goole button">
        <i className="google icon" />
        Sign In With Google
      </button>
    );
  }

  render() {
    return <div> {this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
