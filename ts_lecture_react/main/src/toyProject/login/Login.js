import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const Login = ({ user, web3 }) => {
  const navigate = useNavigate();

  const toMainNavigate = () => {
    navigate("/main");
  };

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      style={{ minHeight: "100vh" }}
      justifyContent="center"
    >
      <Grid item>
        <Card sx={{ maxWidth: 400 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {user.account}
            </Typography>
            <Typography variant="body2">본인 계좌가 맞습니까?</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={toMainNavigate}>
              넹
            </Button>
            <Button
              size="small"
              onClick={() => {
                alert("아닐리가 없기 때문에 기능을 안 만들었습니다.");
              }}
            >
              아니요?
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
