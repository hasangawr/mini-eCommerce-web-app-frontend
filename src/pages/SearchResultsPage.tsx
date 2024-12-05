import { Box } from "@mui/material";
import Title from "../components/Title";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

const SearchResultsPage = () => {
  return (
    <Box sx={{ marginTop: "2.5rem" }}>
      <Title title="products" />
      <SearchBar />
      <SearchResults />
    </Box>
  );
};

export default SearchResultsPage;
