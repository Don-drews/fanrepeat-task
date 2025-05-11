import { useState } from "react";
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
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-80">
        <Box>
          <div className="mb-4 flex flex-col items-center">
            <Typography variant="h4">ログイン</Typography>
          </div>

          <div className="mb-6">
            <TextField
              label="ユーザーID"
              variant="outlined"
              sx={{ width: "100%" }}
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <TextField
              label="パスワード"
              type="password"
              variant="outlined"
              sx={{ width: "100%" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <Typography color="error">{error}</Typography>}

          <div className="flex flex-col justify-center">
            <div className="w-full mb-2">
              <Button
                variant="contained"
                size="large"
                sx={{ width: "100%" }}
                onClick={handleLogin}
              >
                ログイン
              </Button>
            </div>
            <div className="">
              <Link to={"/customer-list"}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ width: "100%" }}
                  onClick={handleGuestLogin}
                >
                  ゲストモード
                </Button>
              </Link>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Login;
