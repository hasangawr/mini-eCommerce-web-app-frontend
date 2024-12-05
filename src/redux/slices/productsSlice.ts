import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

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
  async (product: Product) => {
    const response = await axios.post<Product>(
      `${import.meta.env.VITE_API_BASE_URL}/api/products`,
      product
    );
    return response.data;
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
    await axios.delete(
      `${import.meta.env.VITE_API_BASE_URL}/api/products/${id}`
    );
    return id;
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
      });
  },
});

export const { searchProducts, filterProducts } = productsSlice.actions;
export default productsSlice.reducer;
