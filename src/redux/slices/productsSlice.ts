import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { replaceLeadingHash } from "../../utils/util";

interface IProductImage {
  data: { type: string; data: number[] };
  contentType: string;
}

export interface Product {
  id: string;
  sku: string;
  quantity: number;
  name: string;
  images: IProductImage[];
  description: string;
}

interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/products`
    );
    return response.data.products;
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product: FormData) => {
    await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/products`,
      product,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async (product: Product) => {
    const response = await axios.put<Product>(
      `${import.meta.env.VITE_API_BASE_URL}/api/products/${product.sku}`,
      product
    );
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id: string) => {
    const _id = replaceLeadingHash(id);
    const response = await axios.delete(
      `${import.meta.env.VITE_API_BASE_URL}/api/products/${_id}`
    );
    return response.data.id;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchProducts: (state, action: PayloadAction<string>) => {
      const keyword = action.payload.toLowerCase();
      state.items = state.items.filter((product) =>
        product.name.toLowerCase().includes(keyword)
      );
    },
    filterProducts: (
      state,
      action: PayloadAction<(product: Product) => boolean>
    ) => {
      state.items = state.items.filter(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const productSku = action.payload;
        state.items = state.items.filter(
          (product) => product.sku !== productSku
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.error = action.error.message || "Failed to delete product";
      });
  },
});

export const { searchProducts, filterProducts } = productsSlice.actions;
export default productsSlice.reducer;
