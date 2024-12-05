import { Box, Divider, Typography, useTheme } from "@mui/material";
import SearchResult from "./SearchResult";

const SearchResults = () => {
  const theme = useTheme();
  return (
    <Box sx={{ margin: "0 8.75rem" }}>
      <Typography variant="h2" color={theme.palette.grayPrimary.main}>
        4 results found for ‘Books’
      </Typography>
      <Box sx={{ marginTop: "3.375rem" }}>
        <SearchResult />
        <Divider sx={{ marginBottom: "1.875rem" }} />
        <SearchResult />
        <Divider sx={{ marginBottom: "1.875rem" }} />
        <SearchResult />
        <Divider sx={{ marginBottom: "1.875rem" }} />
        <SearchResult />
      </Box>
    </Box>
  );
};

export default SearchResults;
