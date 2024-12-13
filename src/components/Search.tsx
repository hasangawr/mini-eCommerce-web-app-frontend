import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { filterProducts } from "../redux/slices/productsSlice";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface ISearchProps {
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>;
}

const Search = (props: ISearchProps) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchKey, setSearchKey] = useState<string>("");
  // const [initialValue, setInitialValue] = useState<string>("");

  // const searchFieldRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => {
    if (searchKey) {
      navigate(`/search-results/${searchKey.toLowerCase()}`);
    }
  };

  const handlePressEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      navigate(`/search-results/${searchKey.toLowerCase()}`);
    }
  };

  useEffect(() => {
    dispatch(filterProducts(searchKey));
  }, [dispatch, searchKey]);

  // useEffect(() => {
  //   if (location.href.includes("search-results")) {
  //     setInitialValue(location.href.split("/").pop() as string);
  //     if (searchFieldRef.current) {
  //       searchFieldRef.current.setAttribute("value", initialValue);
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
          onFocus={() => props.setShowResults(true)}
          onChange={(e) => {
            setSearchKey(e.target.value.trim());
          }}
          onKeyDown={handlePressEnter}
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
              autoComplete: "off",
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
          onClick={handleSubmit}
        >
          <SearchIcon />
          <Typography variant="h2">Search</Typography>
        </Button>
      </Box>
    </>
  );
};

export default Search;
