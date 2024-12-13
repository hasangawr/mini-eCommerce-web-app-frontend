import { Box, CircularProgress } from "@mui/material";
import Title from "../components/Title";
import SearchBar from "../components/SearchBar";
import ProductsTable from "../components/ProductsTable";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { fetchProducts } from "../redux/slices/productsSlice";

const ProductsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Box sx={{ marginTop: "2.5rem" }}>
      <Title title="products" />
      <SearchBar />
      {loading ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        <ProductsTable products={items} />
      )}
    </Box>
  );
};

export default ProductsPage;
