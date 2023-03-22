import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useMutation, useQuery } from "react-query";
import { signup } from "../API/Users";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../data/Cookie";

export default () => {
  const [error, setError] = useState("");
  const { mutate, isLoading } = useMutation(signup);
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (
      !data.get("email") ||
      !data.get("password") ||
      !data.get("name") ||
      !data.get("repassword")
    ) {
      setError("all field are required");
      return;
    }
    if (data.get("repassword") !== data.get("password")) {
      setError("password does not match");
      return;
    }
    mutate(
      {
        username: data.get("email")?.toString() || "",
        password: data.get("password")?.toString() || "",
        name: data.get("name")?.toString() || "",
      },
      {
        onSuccess: (e: any) => {
          if (e.error) {
            setError(e.msg);
          } else {
            setCookie("token", e.token);
            navigate("/");
          }
        },
      }
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            type={"email"}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full name"
            name="name"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="repassword"
            label="Renter Password"
            type="password"
            id="repassword"
            autoComplete="current-password"
          />

          <p style={{ color: "red" }}>{error}</p>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            {isLoading && <CircularProgress />} Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/login" variant="body2">
                Already have an account?
              </Link>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
