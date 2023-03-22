export default ({
  username,
  password,
}: {
  username: string;
  password: string;
}) =>
  fetch("http://localhost:4000/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  }).then((res) => res.json());
