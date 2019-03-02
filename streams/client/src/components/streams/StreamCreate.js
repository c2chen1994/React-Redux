import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSumbit = formValues => {
    // preventDefault: redux-form does for us
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSumbit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
