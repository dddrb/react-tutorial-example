import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CommentActions from '../actions/CommentActions';
import CommentBox from './CommentBox';

class Home extends Component {
  render() {
    const {dispatch, comments} = this.props;
    const actions = bindActionCreators(CommentActions, dispatch);
    return (
      <div>
        <CommentBox actions={actions} data={comments} />
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired
};

export default connect(state => state.Comment)(Home)
