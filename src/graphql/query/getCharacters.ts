import {gql, useQuery} from '@apollo/client';

export const GET_CHARACTERS = gql`
  query characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        pages
        count
        next
        prev
      }
      results {
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
  }
`;
