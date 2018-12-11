import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';


class Comments extends React.Component {
  handleNewComment(comment) {
    console.log(comment.text)
  }

  render() {
    return (
    <ReactDisqusComments
      shortname="example"
      identifier="unique-key-2035"
      title="post thread"
      url="http://www.example.com/example-thread"
      category_id="123456"
      onNewComment={this.handleNewComment}/>
    );
  }
}

export default Comments