import { IconButton, Stack } from "@mui/material";
import { useState } from "react";
import DeletePopup from "./DeletePopup";

interface IProductIconsProps {
  id: string;
}

const ProductIcons: React.FC<IProductIconsProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Stack direction="row" gap={1}>
        <IconButton
          onClick={() => {
            setOpen(true);
          }}
        >
          <img src="../../assets/delete-icon.svg" />
        </IconButton>
        <IconButton>
          <img src="../../assets/edit-icon.svg" />
        </IconButton>
        <IconButton>
          <img src="../../assets/star.svg" />
        </IconButton>
      </Stack>
      {<DeletePopup id={props.id} open={open} setOpen={setOpen} />}
    </>
  );
};

export default ProductIcons;
