import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Login from "./components/Login";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import SignUp from "./components/SignUp";
import { Button } from "@mui/material";
import Main from "./components/Main";

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
