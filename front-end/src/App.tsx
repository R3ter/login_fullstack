import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import "./App.css";
import Login from "./components/Login";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import SignUp from "./components/SignUp";
import Main from "./components/Main";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  credentials: "include",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ApolloProvider>
  );
}

export default App;
