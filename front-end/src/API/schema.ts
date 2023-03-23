import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($username: String, $password: String) {
    login(loginData: { username: $username, password: $password }) {
      token
      error
      name
      msg
    }
  }
`;
