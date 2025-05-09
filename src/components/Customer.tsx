import React, { useState } from "react";
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TextField,
  Pagination,
  Typography,
} from "@mui/material";

const dummyData = Array.from({ length: 50 }, (_, i) => ({
  name: `顧客${i + 1}`,
  email: `customer${i + 1}@example.com`,
  phone: `090-1234-5678`,
  registrationDate: new Date(2020, 1, i + 1).toLocaleDateString(),
}));

const CustomerList = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"name" | "date">("name");
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const filteredData = dummyData
    .filter((customer) => customer.name.includes(search))
    .sort((a, b) => {
      if (sort === "name") {
        return a.name.localeCompare(b.name);
      }
      return (
        new Date(a.registrationDate).getTime() -
        new Date(b.registrationDate).getTime()
      );
    });

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <Box className="p-4">
      <Typography variant="h4" className="mb-4">
        顧客一覧
      </Typography>
      <TextField
        label="顧客名で検索"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />
      <Button
        variant="outlined"
        onClick={() => setSort(sort === "name" ? "date" : "name")}
      >
        並び替え: {sort === "name" ? "名前順" : "登録日順"}
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>顧客名</TableCell>
            <TableCell>メールアドレス</TableCell>
            <TableCell>電話番号</TableCell>
            <TableCell>登録日</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData
            .slice((page - 1) * rowsPerPage, page * rowsPerPage)
            .map((customer, index) => (
              <TableRow key={index}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>{customer.registrationDate}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Pagination
        count={Math.ceil(filteredData.length / rowsPerPage)}
        page={page}
        onChange={handlePageChange}
        className="mt-4"
      />
    </Box>
  );
};

export default CustomerList;
