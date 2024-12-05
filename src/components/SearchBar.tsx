import { Box, Button, Typography, useTheme } from "@mui/material";
import Search from "./Search";
import StarIcon from "./StarIcon";

const SearchBar = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "2rem",
        marginBottom: "3.625rem",
      }}
    >
      <Search />
      <Box sx={{ display: "flex", maxHeight: "3.5rem" }}>
        <Button
          sx={{
            backgroundColor: theme.palette.bluePrimary.main,
            color: theme.palette.graySecondary.main,
            padding: "0.9rem 4.2rem",
          }}
        >
          <Typography variant="h2">New Product</Typography>
        </Button>
        <Button
          sx={{
            textAlign: "center",
            border: `1px solid ${theme.palette.bluePrimary.main}`,
            marginLeft: "0.75rem",
          }}
        >
          <StarIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default SearchBar;
