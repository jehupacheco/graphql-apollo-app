import gql from 'graphql-tag';

export const GET_COMMENTS = gql`query {
  comments {
    id
    content
  }
}`;

export const COMMENTS_SUBSCRIPTION = gql`subscription onCommentAdded {
  commentAdded {
    id
    content
  }
}`;

export const ADD_COMMENT = gql`mutation addComment($content: String!) {
  addComment(content: $content) {
    id
    content
  }
}`;

export const REMOVE_COMMENT = gql`mutation removeComment($id: ID!) {
  removeComment(id: $id)
}`;
