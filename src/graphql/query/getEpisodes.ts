import {gql} from '@apollo/client';

export const GET_EPISODES = gql`
  query episodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        count
        pages
        prev
        next
      }
      results {
        id
        name
        air_date
        episode
        characters {
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
  }
`;
