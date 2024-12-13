import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Search from "./Search";
import StarIcon from "./StarIcon";
import { useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const SearchBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [showResults, setShowResults] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const searchSuggestionsRef = useRef<HTMLDivElement | null>(null);

  const filteredProducts = useAppSelector(
    (state) => state.products.filteredProducts
  );

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node) &&
      !searchSuggestionsRef.current?.contains(event.target as Node)
    ) {
      setShowResults(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Box
        ref={searchRef}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "2rem",
          marginBottom: "3.625rem",
          position: "relative",
        }}
      >
        <Search setShowResults={setShowResults} />
        <Box sx={{ display: "flex", maxHeight: "3.5rem" }}>
          <Button
            sx={{
              backgroundColor: theme.palette.bluePrimary.main,
              color: theme.palette.graySecondary.main,
              padding: "0.9rem 4.2rem",
            }}
            href="/new-product"
          >
            <Typography variant="h2">New Product</Typography>
          </Button>
          <Button
            sx={{
              textAlign: "center",
              border: `1px solid ${theme.palette.bluePrimary.main}`,
              marginLeft: "0.75rem",
            }}
            href="/fav-products"
          >
            <StarIcon />
          </Button>
        </Box>
      </Box>
      {filteredProducts.length > 0 ? (
        <Box ref={searchSuggestionsRef}>
          <List
            sx={{
              position: "absolute", // Positioning over other elements
              top: "16rem", // Below the search bar
              left: "",
              width: "50%",
              zIndex: 10,
              backgroundColor: "rgba(255, 255, 255, 0.9)", // Mildly transparent background
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              maxHeight: "300px",
              overflowY: "auto",
              paddingTop: "0",
              paddingBottom: "0",
            }}
          >
            {showResults &&
              filteredProducts.map((product) => (
                <ListItem
                  key={product.id}
                  sx={{
                    borderBottom: "1px solid #f0f0f0",
                    ":hover": {
                      backgroundColor: theme.palette.graySecondary.main,
                    },
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    navigate(`/search-results/${product.name.toLowerCase()}`)
                  }
                >
                  <ListItemText
                    primary={product.name}
                    secondary={
                      product.description || "No description available"
                    }
                  />
                </ListItem>
              ))}
          </List>
        </Box>
      ) : (
        //<Typography>No products found</Typography>
        <></>
      )}
    </>
  );
};

export default SearchBar;
