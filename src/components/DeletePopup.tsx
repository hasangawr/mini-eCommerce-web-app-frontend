import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, fetchProducts } from "../redux/slices/productsSlice";
import { AppDispatch } from "../redux/store";

interface IDeletePopupProps {
  sku: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const DeletePopup: React.FC<IDeletePopupProps> = (props) => {
  const theme = useTheme();
  const dispatch = useDispatch<AppDispatch>();

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleDelete = async () => {
    await dispatch(deleteProduct(props.sku))
      .unwrap()
      .then(() => {
        dispatch(fetchProducts());
      });
    handleClose();
  };

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
      maxWidth="xs"
      open={props.open}
    >
      <DialogContent>
        <Box display="flex" justifyContent="center" marginTop="2.625rem">
          <img src="../../assets/alert.svg" />
        </Box>
        <Box display="flex" justifyContent="center" marginTop="0.875rem">
          <Typography variant="h2" fontSize="1.5rem">
            ARE YOU SURE?
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          marginTop="0.875rem"
          textAlign="center"
        >
          <Typography
            variant="h2"
            fontSize="1.18rem"
            marginLeft="2.688rem"
            marginRight="2.688rem"
          >
            You will not be able to undo this action if you proceed!
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions
        sx={{ justifyContent: "center", marginBottom: "3.375rem" }}
      >
        <Stack spacing="1.563rem" direction="row">
          <Button
            autoFocus
            onClick={() => {
              handleClose();
            }}
            variant="outlined"
            sx={{
              color: theme.palette.bluePrimary.main,
              padding: "0.813rem 1.563rem",
            }}
          >
            <Typography
              variant="h2"
              fontSize="1.188rem"
              color={theme.palette.blackPrimary.main}
            >
              Cancel
            </Typography>
          </Button>
          <Button
            onClick={handleDelete}
            variant="contained"
            sx={{
              backgroundColor: theme.palette.bluePrimary.main,
              padding: "0.813rem 1.563rem",
            }}
          >
            <Typography
              variant="h2"
              fontSize="1.188rem"
              color={theme.palette.background.default}
            >
              Delete
            </Typography>
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default DeletePopup;
