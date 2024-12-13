import { Box, Divider, Typography, useTheme } from "@mui/material";
import SearchResult from "./SearchResult";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../redux/slices/productsSlice";
import { useAppSelector } from "../redux/hooks";

const SearchResults = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { keyword } = useParams();

  useEffect(() => {
    dispatch(filterProducts(keyword as string));
  }, [dispatch, keyword]);

  const filteredProducts = useAppSelector(
    (state) => state.products.filteredProducts
  );

  return (
    <Box sx={{ margin: "0 8.75rem" }}>
      <Typography variant="h2" color={theme.palette.grayPrimary.main}>
        {`${filteredProducts.length} results found for ‘${keyword}’`}
      </Typography>
      <Box sx={{ marginTop: "3.375rem" }}>
        {filteredProducts.map((product) => {
          return (
            <>
              <SearchResult
                sku={product.sku}
                name={product.name}
                description={product.description}
              />
              <Divider sx={{ marginBottom: "1.875rem" }} />
            </>
          );
        })}
      </Box>
    </Box>
  );
};

export default SearchResults;
