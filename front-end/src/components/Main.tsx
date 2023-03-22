import { Button } from "@mui/material";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

export default () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  return (
    <div>
      <p>you are signed in</p>
      <p style={{ wordWrap: "break-word" }}>
        <>your token is : {cookies.get("token", { path: "/" })}</>
      </p>

      <Button
        onClick={() => {
          navigate("/login");
          //   removeCookie("token");
        }}
        variant="outlined"
      >
        Logout
      </Button>
    </div>
  );
};
