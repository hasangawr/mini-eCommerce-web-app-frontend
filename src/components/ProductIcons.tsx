import { IconButton, Stack } from "@mui/material";
import DeletePopup from "./DeletePopup";
import React from "react";
import SimpleDialog from "./DeletePopup";

const ProductIcons = () => {
  const emails = ["username@gmail.com", "user02@gmail.com"];

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <Stack direction="row" gap={1}>
        <IconButton onClick={handleClickOpen}>
          <img src="../../assets/delete-icon.svg" />
        </IconButton>
        <IconButton>
          <img src="../../assets/edit-icon.svg" />
        </IconButton>
        <IconButton>
          <img src="../../assets/star.svg" />
        </IconButton>
      </Stack>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
};

export default ProductIcons;
