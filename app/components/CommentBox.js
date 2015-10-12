import React, {Component} from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import io from 'socket.io-client';
export const socket = io('http://localhost:3000');

class CommentBox extends Component {
  componentWillMount() {
    const {actions} = this.props;
    socket.on('recieve comments', function(comments) {
      actions.recieveComments(comments);
    });
  }

  componentDidMount() {
    this.props.actions.searchComments();
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
