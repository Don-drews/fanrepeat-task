import React, { useState } from "react";
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Pagination,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { customers } from "../data/customer";

const CustomerList = () => {
  const [search, setSearch] = useState("");
  // const [sort, setSort] = useState<"name" | "date">("name");
  const [sort, setSort] = useState<string>("name");
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  // 顧客名での検索処理
  const filteredData = customers
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

  // ページネーションの変更処理
  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSort(event.target.value);
  };

  return (
    <Box className="p-4">
      <Typography variant="h4" sx={{ marginBottom: "15px" }}>
        顧客一覧
      </Typography>
      <div className="flex">
        <TextField
          label="顧客名で検索"
          variant="outlined"
          value={search}
          sx={{ height: 56, width: 250 }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FormControl
          component="fieldset"
          sx={{ height: 56, marginLeft: "20px" }}
        >
          <RadioGroup
            value={sort}
            sx={{ display: "flex", justifyContent: "center", height: "100%" }}
            onChange={handleChange}
            row
          >
            <FormControlLabel value="name" control={<Radio />} label="名前順" />
            <FormControlLabel
              value="date"
              control={<Radio />}
              label="登録日順"
            />
          </RadioGroup>
        </FormControl>
      </div>
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
