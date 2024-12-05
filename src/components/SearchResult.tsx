import { Box, IconButton, Typography, useTheme } from "@mui/material";

const SearchResult = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      marginBottom="1.875rem"
    >
      <Box>
        <Typography
          variant="body1"
          color={theme.palette.bluePrimary.main}
          sx={{ marginBottom: "0.625rem" }}
        >
          #CA25
        </Typography>
        <Typography
          variant="h2"
          color={theme.palette.blackPrimary.main}
          sx={{ marginBottom: "0.625rem" }}
        >
          Product-name
        </Typography>
        <Typography variant="body2" color={theme.palette.grayPrimary.main}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          libero quod aperiam. Possimus, ratione voluptate?
        </Typography>
      </Box>
      <Box>
        <IconButton>
          <img src="../../assets/arrow.svg" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SearchResult;
