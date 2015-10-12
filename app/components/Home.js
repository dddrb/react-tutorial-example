import React, {Component} from 'react';
import CommentBox from './CommentBox';

const data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

class Home extends Component {
  render() {
    return (
      <div>
        <CommentBox data={data} />
      </div>
    );
  }
}

export default Home
