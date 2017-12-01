import React from 'react';
import Comment from './Comment';
import { graphql } from 'react-apollo';
import { GET_COMMENTS } from '../utils/query';

const Comments = ({data: { loading, comments }}) => (
  <div className="section">
    {!loading
      ? comments.map((comment) => (
        <Comment {...comment} key={comment.id} />
      ))
      : 'Loading ...'
    }
  </div>
);

export default graphql(GET_COMMENTS)(Comments);
