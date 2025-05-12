import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <Box className="bg-blue-600 p-4 flex justify-between items-center text-white">
      <Typography variant="h6" className="font-semibold">
        顧客管理画面
      </Typography>
      <Box>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginRight: "15px" }}
        >
          顧客登録
        </Button>
        <Button variant="contained" color="secondary">
          ログアウト
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
