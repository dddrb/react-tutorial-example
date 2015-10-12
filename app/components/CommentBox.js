import React, {Component} from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends Component {
  componentDidMount() {
    this.props.actions.searchComments();
    setInterval(this.props.actions.searchComments, 2000);
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm onCommentSubmit={this.props.actions.createComment} />
      </div>
    );
  }
}

export default CommentBox;
