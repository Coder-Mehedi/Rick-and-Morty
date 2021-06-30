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
          type
          dimension
        }
        location {
          id
          name
          type
        }
        image
        episode {
          id
          name
        }
      }
    }
  }
`;

export default function useCharacters(varibles?: {[key: string]: any}) {
  return useQuery(GET_CHARACTERS, varibles);
}
