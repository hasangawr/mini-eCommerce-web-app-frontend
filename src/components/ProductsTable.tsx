import { Box, Divider } from "@mui/material";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { Product } from "../redux/slices/productsSlice";
import React from "react";

interface IProductsTableProps {
  products: Product[];
}

const ProductsTable: React.FC<IProductsTableProps> = (props) => {
  return (
    <Box sx={{ margin: "0 2.375rem" }}>
      <TableHead />
      {props.products.map((product) => (
        <>
          <TableRow product={product} />
          <Divider sx={{ marginBottom: "2rem" }} />
        </>
      ))}
    </Box>
  );
};

export default ProductsTable;
