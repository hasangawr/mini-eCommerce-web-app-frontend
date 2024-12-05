import { Grid2, Typography, useTheme } from "@mui/material";
import ProductIcons from "./ProductIcons";
import { Product } from "../redux/slices/productsSlice";
import { imagefrombuffer } from "imagefrombuffer";

interface ITableRowProps {
  product: Product;
}

const TableRow: React.FC<ITableRowProps> = (props) => {
  const theme = useTheme();

  // function bufferToBase64(buffer: number[]): string {
  //   return btoa(String.fromCharCode(...new Uint8Array(buffer)));
  // }

  // const base64Image = bufferToBase64(props.product.images[0].data.data);

  return (
    <Grid2 container spacing={2} marginBottom="1.75rem">
      <Grid2 size={2}>
        <Typography variant="body1" color={theme.palette.grayPrimary.main}>
          {props.product.sku}
        </Typography>
      </Grid2>
      <Grid2 size={2}>
        <img
          src={imagefrombuffer({
            type: props.product.images[0].data.type,
            data: props.product.images[0].data.data,
          })}
          style={{ height: "66px", width: "66px" }}
        />
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
        <ProductIcons />
      </Grid2>
    </Grid2>
  );
};

export default TableRow;
