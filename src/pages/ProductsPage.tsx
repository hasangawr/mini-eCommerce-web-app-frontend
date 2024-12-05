import { Box } from "@mui/material";
import Title from "../components/Title";
import SearchBar from "../components/SearchBar";
import ProductsTable from "../components/ProductsTable";

const ProductsPage = () => {
  return (
    <Box sx={{ marginTop: "2.5rem" }}>
      <Title title="products" />
      <SearchBar />
      <ProductsTable />
    </Box>
  );
};

export default ProductsPage;
