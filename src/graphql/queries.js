/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLeaderBoard = /* GraphQL */ `
  query GetLeaderBoard($id: ID!) {
    getLeaderBoard(id: $id) {
      id
      address
      score
      createdAt
      updatedAt
    }
  }
`;
export const listLeaderBoards = /* GraphQL */ `
  query ListLeaderBoards(
    $filter: ModelLeaderBoardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeaderBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        address
        score
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
