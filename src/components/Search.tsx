import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { filterProducts } from "../redux/slices/productsSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Search = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [searchKey, setSearchKey] = useState<string>("");

  useEffect(() => {
    dispatch(filterProducts(searchKey));
  }, [dispatch, searchKey]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "50px",
          backgroundColor: "#f5f5f5",
          padding: "0",
          height: "4rem",
          flex: "0 0 47rem",
        }}
      >
        <TextField
          variant="filled"
          placeholder="Search for products"
          fullWidth
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
          sx={{
            "& .css-1lcalf0-MuiInputBase-root-MuiFilledInput-root": {
              backgroundColor: "transparent",
            },
            "& .css-1lcalf0-MuiInputBase-root-MuiFilledInput-root.Mui-focused":
              {
                backgroundColor: "transparent",
              },
            "& .css-1lcalf0-MuiInputBase-root-MuiFilledInput-root:hover": {
              backgroundColor: "transparent",
            },
            "& input": {
              position: "relative",
              bottom: "8px",
              left: "20px",
            },
          }}
          slotProps={{
            input: {
              sx: {
                borderRadius: "50px",
              },
              disableUnderline: true,
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            borderRadius: "80px",
            textTransform: "none",
            backgroundColor: theme.palette.bluePrimary.main,
            "&:hover": {
              backgroundColor: "#001acc",
            },
            minWidth: "11.25rem",
            height: "2.8rem",
            marginRight: "1rem",
          }}
        >
          <SearchIcon />
          <Typography variant="h2">Search</Typography>
        </Button>
      </Box>
    </>
  );
};

export default Search;
