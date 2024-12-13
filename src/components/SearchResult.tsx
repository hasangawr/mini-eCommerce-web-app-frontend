import { Box, IconButton, Typography, useTheme } from "@mui/material";

interface ISearchResultProps {
  sku: string;
  name: string;
  description: string;
}

const SearchResult = (props: ISearchResultProps) => {
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
          {props.sku}
        </Typography>
        <Typography
          variant="h2"
          color={theme.palette.blackPrimary.main}
          sx={{ marginBottom: "0.625rem" }}
        >
          {props.name}
        </Typography>
        <Typography variant="body2" color={theme.palette.grayPrimary.main}>
          {props.description}
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
