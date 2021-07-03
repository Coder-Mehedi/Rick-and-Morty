import {gql} from '@apollo/client';

export const GET_CHARACTER = gql`
  query character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      origin {
        id
        name
      }
      location {
        id
        name
      }
      episode {
        id
        name
        air_date
      }
    }
  }
`;
