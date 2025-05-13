import React from "react";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
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
      <Box className="bg-gray-800 text-white sm:hidden">
        <List>
          <ListItem component={Link} to="/dashboard">
            <ListItemText primary="案件ボード" />
          </ListItem>
          <ListItem component={Link} to="/home">
            <ListItemText primary="顧客一覧" />
          </ListItem>
          <ListItem component={Link} to="/customer-register">
            <ListItemText primary="顧客登録" />
          </ListItem>
          <Divider />
          <ListItem component={Link} to="/">
            <ListItemText primary="ログアウト" />
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default Header;
