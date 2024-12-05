import {
  Box,
  Grid2,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

const ProductForm = () => {
  const theme = useTheme();

  return (
    <Box sx={{ marginTop: "2.5rem" }}>
      <Grid2 container spacing={2}>
        <Grid2 size={6}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body1" color={theme.palette.blackPrimary.main}>
              SKU
            </Typography>
            <TextField
              size="small"
              sx={{
                backgroundColor: theme.palette.graySecondary.main,
                maxHeight: "2.8rem",
                width: "25rem",
              }}
              variant="outlined"
            />
          </Stack>
        </Grid2>
        <Grid2 size={6}></Grid2>
        <Grid2 size={6}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body1" color={theme.palette.blackPrimary.main}>
              Name
            </Typography>
            <TextField
              size="small"
              sx={{
                backgroundColor: theme.palette.graySecondary.main,
                maxHeight: "2.8rem",
                width: "25rem",
              }}
              variant="outlined"
            />
          </Stack>
        </Grid2>
        <Grid2 size={6}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body1" color={theme.palette.blackPrimary.main}>
              QTY
            </Typography>
            <TextField
              size="small"
              sx={{
                backgroundColor: theme.palette.graySecondary.main,
                maxHeight: "2.8rem",
                width: "25rem",
              }}
              variant="outlined"
            />
          </Stack>
        </Grid2>
        <Grid2 size={12}>
          <TextField
            size="small"
            sx={{
              backgroundColor: theme.palette.graySecondary.main,
              maxHeight: "2.8rem",
            }}
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            slotProps={{
              input: {
                sx: {
                  backgroundColor: theme.palette.graySecondary.main,
                },
              },
            }}
          />
        </Grid2>
        <Grid2 size={12}></Grid2>
        <Grid2 size={6}></Grid2>
        <Grid2 size={6}></Grid2>
      </Grid2>
    </Box>
  );
};

export default ProductForm;
