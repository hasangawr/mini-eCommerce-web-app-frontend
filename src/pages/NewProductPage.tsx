import { Box, Typography, useTheme } from "@mui/material";
import ProductForm from "../components/ProductForm";

const NewProductPage = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ marginTop: "2.5rem", display: "flex", alignItems: "center" }}>
        <Typography variant="h1">products</Typography>
        <img src="../../assets/arrow.svg" />
        <Typography variant="h2" color={theme.palette.bluePrimary.main}>
          Add new product
        </Typography>
      </Box>
      <ProductForm />
    </>
  );
};

export default NewProductPage;
