import { Grid2, Typography, useTheme } from "@mui/material";
import ProductIcons from "./ProductIcons";
import { Product } from "../redux/slices/productsSlice";
import { arrayBufferToBase64 } from "../utils/util";

interface ITableRowProps {
  product: Product;
}

const TableRow: React.FC<ITableRowProps> = (props) => {
  const theme = useTheme();

  return (
    <Grid2 container spacing={2} marginBottom="1.75rem">
      <Grid2 size={2}>
        <Typography variant="body1" color={theme.palette.grayPrimary.main}>
          {props.product.sku}
        </Typography>
      </Grid2>
      <Grid2 size={2}>
        {props.product.images.length !== 0 && (
          <img
            src={
              "data: " +
              props.product.images[0].contentType +
              ";base64," +
              arrayBufferToBase64(props.product.images[0].data.data)
            }
            style={{ height: "66px", width: "66px" }}
          />
        )}
      </Grid2>
      <Grid2 size={2}>
        <Typography variant="body1" color={theme.palette.blackPrimary.main}>
          {props.product.name}
        </Typography>
      </Grid2>
      <Grid2 size={3}>
        <Typography variant="body1" color={theme.palette.blackPrimary.main}>
          $24.00
        </Typography>
      </Grid2>
      <Grid2 size={3}>
        <ProductIcons sku={props.product.sku} />
      </Grid2>
    </Grid2>
  );
};

export default TableRow;
