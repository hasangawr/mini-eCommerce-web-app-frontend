import { Grid2, Typography, useTheme } from "@mui/material";

const TableHead = () => {
  const theme = useTheme();
  return (
    <Grid2 container spacing={2} marginBottom="1.75rem">
      <Grid2 size={2}>
        <Typography variant="h2" color={theme.palette.bluePrimary.main}>
          SKU
        </Typography>
      </Grid2>
      <Grid2 size={2}>
        <Typography variant="h2" color={theme.palette.bluePrimary.main}>
          IMAGE
        </Typography>
      </Grid2>
      <Grid2 size={2}>
        <Typography variant="h2" color={theme.palette.bluePrimary.main}>
          PRODUCT NAME
        </Typography>
      </Grid2>
      <Grid2 size={3}>
        <Typography variant="h2" color={theme.palette.bluePrimary.main}>
          PRICE
        </Typography>
      </Grid2>
      <Grid2 size={3}></Grid2>
    </Grid2>
  );
};

export default TableHead;
