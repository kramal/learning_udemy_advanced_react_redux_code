import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentList extends Component {
  render() {
    let { comments } = this.props;
    console.log(comments.length);

    if (comments.length > 0) {
      let comments_list = [];

      for (let i = 0; i < comments.length; i++) {
        comments_list.push(<li>{comments[i]}</li>);
      }

      return <ul>{comments_list}</ul>;
    }

    return <span>No Data</span>;
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(
  mapStateToProps,
  actions
)(CommentList);
