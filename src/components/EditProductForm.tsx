import {
  Box,
  Button,
  Grid2,
  Link,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  editProduct,
  fetchProducts,
  IProductImage,
  selectProduct,
} from "../redux/slices/productsSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { createFileFromImage } from "../utils/util";

const EditProductForm = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const [sku, setSku] = useState<string>("");
  const [productName, setProductName] = useState<string>("");
  const [qty, setQty] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const selectedProduct = useAppSelector(
    (state) => state.products.selectedProduct
  );

  useEffect(() => {
    const getSelectedProduct = async () => {
      await dispatch(fetchProducts()).then(() => {
        dispatch(selectProduct(id as string));
      });
    };

    getSelectedProduct();
  }, [dispatch, id]);

  useEffect(() => {
    const createFilesFromImages = (productImages: IProductImage[]) => {
      if (productImages.length !== 0) {
        const imageFiles = productImages.map((productImage, index) => {
          return createFileFromImage(
            productImage.contentType,
            productImage.data.data,
            `imgFile${index}`
          );
        });

        return imageFiles;
      }

      return [];
    };

    const loadInitialImages = (files: File[]) => {
      if (files) {
        const fileArray = Array.from(files);
        setImages(() => [...fileArray]);

        // Generate image previews
        const newPreviews = fileArray.map((file) => URL.createObjectURL(file));
        setPreviews(() => [...newPreviews]);

        console.log("initial");
      }
    };

    if (selectedProduct) {
      const filesFromImages = createFilesFromImages(selectedProduct.images);

      setSku(selectedProduct.sku);
      setProductName(selectedProduct.name);
      setQty(selectedProduct.quantity);
      setDescription(selectedProduct.description);
      setImages(filesFromImages);

      loadInitialImages(filesFromImages);
    }
  }, [selectedProduct]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setImages((prevImages) => [...prevImages, ...fileArray]);

      console.log("images: ", images.length);

      // Generate image previews
      const newPreviews = fileArray.map((file) => URL.createObjectURL(file));
      setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);

      console.log("previews: ", previews.length);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("sku", sku);
    formData.append("name", productName);
    formData.append("quantity", qty.toString());
    formData.append("description", description);
    images.forEach((image) => formData.append("images", image));

    try {
      await dispatch(
        editProduct({ product: formData, productId: id as string })
      ).unwrap();
      await dispatch(fetchProducts());
      navigate("/");
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

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
              slotProps={{
                input: {
                  sx: {
                    backgroundColor: theme.palette.graySecondary.main,
                    color: theme.palette.grayPrimary.main,
                    fontSize: "0.875rem",
                  },
                },
              }}
              variant="outlined"
              value={sku}
              onChange={(e) => {
                setSku(e.target.value);
              }}
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
              slotProps={{
                input: {
                  sx: {
                    backgroundColor: theme.palette.graySecondary.main,
                    color: theme.palette.grayPrimary.main,
                    fontSize: "0.875rem",
                  },
                },
              }}
              variant="outlined"
              value={productName}
              onChange={(e) => {
                setProductName(e.target.value);
              }}
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
              slotProps={{
                input: {
                  sx: {
                    backgroundColor: theme.palette.graySecondary.main,
                    color: theme.palette.grayPrimary.main,
                    fontSize: "0.875rem",
                  },
                },
              }}
              variant="outlined"
              value={qty}
              onChange={(e) => {
                setQty(Number(e.target.value));
              }}
            />
          </Stack>
        </Grid2>
        <Grid2 size={12}>
          <Box sx={{ margin: "1rem 1rem 0 0" }}>
            <Typography variant="body1" color={theme.palette.blackPrimary.main}>
              Product Description
            </Typography>
            <Typography
              variant="body1"
              color={theme.palette.grayPrimary.main}
              fontSize="0.875rem"
            >
              A small description about the product
            </Typography>
          </Box>
          <TextField
            size="small"
            sx={{
              backgroundColor: theme.palette.graySecondary.main,
              maxHeight: "2.8rem",
            }}
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            slotProps={{
              input: {
                sx: {
                  backgroundColor: theme.palette.graySecondary.main,
                  color: theme.palette.grayPrimary.main,
                  fontSize: "0.875rem",
                },
              },
            }}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Grid2>
        <Grid2 size={2}>
          <Box sx={{ marginTop: "3rem" }}>
            <Typography variant="body1" color={theme.palette.blackPrimary.main}>
              Product Images
            </Typography>
            <Typography
              variant="body1"
              color={theme.palette.grayPrimary.main}
              fontSize="0.875rem"
            >
              JPEG, PNG, SVG or GIF (Maximum file size 50MB)
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={10}>
          <Box sx={{ marginTop: "3rem" }}>
            <Link
              component="label"
              sx={{ cursor: "pointer", display: "block", marginBottom: 2 }}
            >
              <Typography
                variant="body1"
                color={theme.palette.bluePrimary.main}
              >
                Add Images
              </Typography>
              <input
                type="file"
                accept="image/*"
                multiple
                hidden
                onChange={handleFileChange}
              />
            </Link>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                marginBottom: 2,
                maxHeight: 100,
              }}
            >
              {previews.map((preview, index) => (
                <img
                  key={index}
                  src={preview}
                  alt={`Preview ${index}`}
                  width={100}
                />
              ))}
            </Box>
          </Box>
        </Grid2>
        <Grid2 size={3}></Grid2>
        <Grid2 size={3}></Grid2>
        <Grid2 size={3}></Grid2>
        <Grid2 size={3}>
          <Button
            sx={{
              backgroundColor: theme.palette.bluePrimary.main,
              color: theme.palette.graySecondary.main,
              padding: "0.9rem 4.2rem",
            }}
            onClick={handleSubmit}
          >
            <Typography variant="h2">Save Changes</Typography>
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default EditProductForm;
