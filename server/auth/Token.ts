import jwt from "jsonwebtoken";

const signToken = ({ username, name, id }) => {
  console.log(`username: ${username}`);
  console.log(`id: ${id}`);
  console.log(`name: ${name}`);
  if (!username || !id) {
    throw new Error("data is not provided correctly");
  }
  return jwt.sign({ username, name, id }, process.env.SECRET);
};

export { signToken };
