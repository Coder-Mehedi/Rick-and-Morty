import {gql} from '@apollo/client';

export const GET_LOCATION = gql`
  query location($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        image
      }
    }
  }
`;
