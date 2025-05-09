import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!userId || !password) {
      setError("ユーザーIDとパスワードは必須です。");
    } else {
      setError("");
      // 実際のログイン処理はここで行います
      console.log("ログイン:", userId, password);
    }
  };

  const handleGuestLogin = () => {
    // ゲストモードで顧客一覧画面に遷移
    console.log("ゲストモードでログイン");
  };

  return (
    <Box className="flex flex-col items-center justify-center min-h-screen p-4">
      <Typography variant="h4" className="mb-4">
        ログイン
      </Typography>
      <TextField
        label="ユーザーID"
        variant="outlined"
        className="mb-4"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <TextField
        label="パスワード"
        type="password"
        variant="outlined"
        className="mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" className="mb-2" onClick={handleLogin}>
        ログイン
      </Button>
      <Link to={"/customer-list"}>
        <Button variant="outlined" onClick={handleGuestLogin}>
          ゲストモード
        </Button>
      </Link>
    </Box>
  );
};

export default Login;
