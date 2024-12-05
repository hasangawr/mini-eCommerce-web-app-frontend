import { Box } from "@mui/material";
import SearchBar from "../components/SearchBar";
import ProductsTable from "../components/ProductsTable";
import Title from "../components/Title";

const FavouriteProductsPage = () => {
  return (
    <Box sx={{ marginTop: "2.5rem" }}>
      <Title title="favourite products" />
      <SearchBar />
      <ProductsTable />
    </Box>
  );
};

export default FavouriteProductsPage;
