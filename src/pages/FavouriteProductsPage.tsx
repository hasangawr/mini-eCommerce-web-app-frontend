import { Box, CircularProgress } from "@mui/material";
import SearchBar from "../components/SearchBar";
import ProductsTable from "../components/ProductsTable";
import Title from "../components/Title";
import { useAppSelector } from "../redux/hooks";

const FavouriteProductsPage = () => {
  const { items, loading, error } = useAppSelector((state) => state.products);
  return (
    <Box sx={{ marginTop: "2.5rem" }}>
      <Title title="favourite products" />
      <SearchBar />
      {loading ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        <ProductsTable products={items.filter((item) => item.isFavourite)} />
      )}
    </Box>
  );
};

export default FavouriteProductsPage;
