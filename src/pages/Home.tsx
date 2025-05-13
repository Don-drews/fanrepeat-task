import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CustomerList from "../components/CustomerList";

const Home: React.FC = () => {
  return (
    <>
      {/* ヘッダー */}
      <Header />
      <Box className="flex h-screen">
        {/* サイドバー */}
        <Sidebar />
        {/* メインコンテンツ */}
        <Box className="flex-1">
          {/* 顧客一覧の表示 */}
          <CustomerList />
        </Box>
      </Box>
    </>
  );
};

export default Home;
