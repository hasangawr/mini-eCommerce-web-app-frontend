import {
  Box,
  Button,
  Grid2,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addProduct, fetchProducts } from "../redux/slices/productsSlice";
import { useNavigate } from "react-router-dom";
import { Delete } from "@mui/icons-material";

const ProductForm = () => {
  const theme = useTheme();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [sku, setSku] = useState<string>("");
  const [productName, setProductName] = useState<string>("");
  const [qty, setQty] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setImages((prevImages) => [...prevImages, ...fileArray]);

      // Generate image previews
      const newPreviews = fileArray.map((file) => URL.createObjectURL(file));
      setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
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
      await dispatch(addProduct(formData)).unwrap();
      await dispatch(fetchProducts());
      navigate("/");
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  // considering first image as the thumbnail
  // move selected image to front of the array
  const setThumbnail = (index: number) => {
    const prevArray = [...previews];
    const imgArray = [...images];

    const thumbnailPrev = prevArray.splice(index, 1)[0];
    const thumbnailImg = imgArray.splice(index, 1)[0];

    prevArray.unshift(thumbnailPrev);
    imgArray.unshift(thumbnailImg);

    setPreviews(prevArray);
    setImages(imgArray);
  };

  const handleRemove = (index: number) => {
    const prevArray = [...previews];
    const imgArray = [...images];

    prevArray.splice(index, 1);
    imgArray.splice(index, 1);

    setPreviews(prevArray);
    setImages(imgArray);
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
                <Box
                  sx={{
                    position: "relative",
                    bgcolor: "grey.300",
                    //overflow: "hidden",
                    "&:hover .remove-button": {
                      opacity: 1, // Make the button visible on hover
                    },
                    cursor: "pointer",
                    marginRight: "1rem",
                  }}
                >
                  <Box
                    className="overlay"
                    onClick={() => {
                      setThumbnail(index);
                    }}
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      bgcolor: "rgba(0, 0, 0, 0.5)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    {index === 0 ? (
                      <Typography variant="body2">Thumbnail</Typography>
                    ) : (
                      <Typography variant="body2">
                        Click to set as thumbnail
                      </Typography>
                    )}
                  </Box>
                  <img
                    key={index}
                    src={preview}
                    alt={`Preview ${index}`}
                    width={100}
                  />

                  <IconButton
                    className="remove-button"
                    sx={{
                      position: "absolute",
                      top: "-30%",
                      right: "-20%",
                      bgcolor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background
                      opacity: 0, // Initially hidden
                      transition: "opacity 0.3s ease",
                      zIndex: 2, // Ensure the button is above both the image and the overlay
                      "&:hover": {
                        bgcolor: "rgba(255, 0, 0, 0.8)", // Button hover effect
                        color: "white",
                      },
                      "&:hover .overlay": {
                        opacity: 0,
                      },
                    }}
                    onClick={() => handleRemove(index)}
                  >
                    <Delete sx={{ width: "1rem", height: "1rem" }} />
                  </IconButton>
                </Box>
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
            <Typography variant="h2">Add Product</Typography>
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default ProductForm;
