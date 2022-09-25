/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLeaderBoard = /* GraphQL */ `
  mutation CreateLeaderBoard(
    $input: CreateLeaderBoardInput!
    $condition: ModelLeaderBoardConditionInput
  ) {
    createLeaderBoard(input: $input, condition: $condition) {
      id
      address
      score
      createdAt
      updatedAt
    }
  }
`;
export const updateLeaderBoard = /* GraphQL */ `
  mutation UpdateLeaderBoard(
    $input: UpdateLeaderBoardInput!
    $condition: ModelLeaderBoardConditionInput
  ) {
    updateLeaderBoard(input: $input, condition: $condition) {
      id
      address
      score
      createdAt
      updatedAt
    }
  }
`;
export const deleteLeaderBoard = /* GraphQL */ `
  mutation DeleteLeaderBoard(
    $input: DeleteLeaderBoardInput!
    $condition: ModelLeaderBoardConditionInput
  ) {
    deleteLeaderBoard(input: $input, condition: $condition) {
      id
      address
      score
      createdAt
      updatedAt
    }
  }
`;
