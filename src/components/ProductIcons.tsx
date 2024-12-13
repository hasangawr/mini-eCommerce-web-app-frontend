import { IconButton, Stack } from "@mui/material";
import { useState } from "react";
import DeletePopup from "./DeletePopup";
import { replaceLeadingHash } from "../utils/util";
import { changeFav } from "../redux/slices/productsSlice";
import { useAppDispatch } from "../redux/hooks";

interface IProductIconsProps {
  sku: string;
  isFavourite: boolean;
}

const ProductIcons: React.FC<IProductIconsProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [fav, setFav] = useState<boolean>(props.isFavourite);

  const dispatch = useAppDispatch();

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
        <IconButton href={`/edit-product/${replaceLeadingHash(props.sku)}`}>
          <img src="../../assets/edit-icon.svg" />
        </IconButton>
        <IconButton
          onClick={() => {
            setFav(!fav);
            dispatch(changeFav(props.sku));
          }}
        >
          {fav ? (
            <img src="../../assets/starred.svg" />
          ) : (
            <img src="../../assets/star.svg" />
          )}
        </IconButton>
      </Stack>
      {<DeletePopup sku={props.sku} open={open} setOpen={setOpen} />}
    </>
  );
};

export default ProductIcons;
