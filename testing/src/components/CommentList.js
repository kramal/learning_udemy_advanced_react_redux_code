import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentList extends Component {
  renderComments() {
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>;
    });
  }

  render() {
    return (
      <div>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(
  mapStateToProps,
  actions
)(CommentList);
