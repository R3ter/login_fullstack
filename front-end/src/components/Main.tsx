import { Button } from "@mui/material";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "../data/Cookie";

export default () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>you are signed in</p>
      <p style={{ wordWrap: "break-word" }}>
        <>your token is : {getCookie("token")}</>
      </p>

      <Button
        onClick={() => {
          navigate("/login");
          removeCookie("token");
        }}
        variant="outlined"
      >
        Logout
      </Button>
    </div>
  );
};
