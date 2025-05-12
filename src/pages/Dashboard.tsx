import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Box className="flex h-screen">
        {/* サイドバー */}
        <Sidebar />
        {/* メインコンテンツ */}
        <Box className="flex-1">{/* 案件ボードの表示 */}</Box>
      </Box>
    </>
  );
};

export default Dashboard;
