import { Box, Divider } from "@mui/material";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

const ProductsTable = () => {
  return (
    <Box sx={{ margin: "0 2.375rem" }}>
      <TableHead />
      <TableRow />
      <Divider sx={{ marginBottom: "2rem" }} />
      <TableRow />
      <Divider sx={{ marginBottom: "2rem" }} />
      <TableRow />
      <Divider sx={{ marginBottom: "2rem" }} />
      <TableRow />
      <Divider sx={{ marginBottom: "2rem" }} />
      <TableRow />
      <Divider sx={{ marginBottom: "2rem" }} />
    </Box>
  );
};

export default ProductsTable;
