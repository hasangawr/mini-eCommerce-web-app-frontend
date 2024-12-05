import { Grid2, Typography, useTheme } from "@mui/material";
import ProductIcons from "./ProductIcons";

const TableRow = () => {
  const theme = useTheme();

  return (
    <Grid2 container spacing={2} marginBottom="1.75rem">
      <Grid2 size={2}>
        <Typography variant="body1" color={theme.palette.grayPrimary.main}>
          #CA25
        </Typography>
      </Grid2>
      <Grid2 size={2}>
        <img
          src="../../assets/product-img-1.png"
          style={{ height: "66px", width: "66px" }}
        />
      </Grid2>
      <Grid2 size={2}>
        <Typography variant="body1" color={theme.palette.blackPrimary.main}>
          Product-Name
        </Typography>
      </Grid2>
      <Grid2 size={3}>
        <Typography variant="body1" color={theme.palette.blackPrimary.main}>
          $24.00
        </Typography>
      </Grid2>
      <Grid2 size={3}>
        <ProductIcons />
      </Grid2>
    </Grid2>
  );
};

export default TableRow;
