import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';
import { ADD_COMMENT, GET_COMMENTS } from '../utils/query';

class CommentBox extends PureComponent {
  state = {
    content: '',
  };

  changeContent = (e) => {
    this.setState({ content: e.target.value });
  };

  saveComment = () => {
    const content = this.state.content;

    this.props.saveComment(content);
    this.setState({ content: '' });
  }

  render() {
    const {
      content,
    } = this.state;

    return (
      <div className="section">
        <div className="field">
          <div className="control">
            <textarea className="textarea" onChange={this.changeContent} value={content} />
          </div>
        </div>
        <button className="button is-primary" onClick={this.saveComment} disabled={!content}>
          Enviar
        </button>
      </div>
    );
  }
}

export default graphql(ADD_COMMENT, {
  props: ({ mutate }) => ({
    saveComment: async (content) => {
      try {
        await mutate({
          variables: {
            content,
          },
        });
      } catch (error) {
        console.log('Bad', error);
      }
    },
  }),
  options: {
    refetchQueries: [
      {
        query: GET_COMMENTS
      },
    ],
  },
})(CommentBox);
