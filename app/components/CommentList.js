import React, {Component, PropTypes} from 'react';
import Comment from './Comment';

class CommentList extends Component {
  render() {
    const commentNodes = this.props.data.map((comment, index) => {
      return (
        <Comment author={comment.author} key={index}>
          {comment.text}
        </Comment>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}

CommentList.propTypes = {
  data: PropTypes.array.isRequired
};

export default CommentList;
