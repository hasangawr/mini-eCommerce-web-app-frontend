import { Box, Typography, useTheme } from "@mui/material";

const EditProductPage = () => {
  const theme = useTheme();
  return (
    <Box sx={{ marginTop: "2.5rem", display: "flex", alignItems: "center" }}>
      <Typography variant="h1">products</Typography>
      <img src="../../assets/arrow.svg" />
      <Typography variant="h2" color={theme.palette.bluePrimary.main}>
        Edit product
      </Typography>
    </Box>
  );
};

export default EditProductPage;