import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const CustomerRegisterPage: React.FC = () => {
  return (
    <>
      <Header />
      <Box className="flex h-screen">
        {/* サイドバー */}
        <Sidebar />
        {/* メインコンテンツ */}
        <Box className="flex-1">{/* 顧客登録 */}</Box>
      </Box>
    </>
  );
};

export default CustomerRegisterPage;
