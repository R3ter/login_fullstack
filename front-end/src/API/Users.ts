const login = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  return fetch("http://localhost:4000/login", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    method: "POST",
    body: JSON.stringify({ username, password }),
  }).then((res) => res.json());
};
const signup = ({
  username,
  password,
  name,
}: {
  username: string;
  password: string;
  name: string;
}) => {
  return fetch("http://localhost:4000/signup", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    method: "POST",
    body: JSON.stringify({ username, password, name }),
  }).then((res) => res.json());
};

export { login, signup };
