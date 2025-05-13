import React from "react";
import { Box, List, ListItem, ListItemText, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <>
      {/* デスクトップ表示用サイドバー */}
      <Box className="hidden md:block sm:w-48 bg-gray-800 text-white h-full">
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

export default Sidebar;
