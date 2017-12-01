import React from 'react';
import { graphql } from 'react-apollo';
import { REMOVE_COMMENT, GET_COMMENTS } from '../utils/query';

const Comment = ({ id, content, removeComment }) => (
  <div className="box">
    <div className="columns">
      <div className="column is-11">
        {`${id}. ${content}`}
      </div>
      <div className="column has-text-right">
        <a className="button" onClick={removeComment}>
          X
        </a>
      </div>
    </div>
  </div>
);

export default graphql(REMOVE_COMMENT, {
  props: ({ mutate, ownProps }) => ({
    removeComment: async () => {
      try {
        await mutate({
          variables: {
            id: ownProps.id,
          }
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
})(Comment);
