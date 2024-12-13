import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ProductsPage from "./pages/ProductsPage";
import FavouriteProductsPage from "./pages/FavouriteProductsPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import NewProductPage from "./pages/NewProductPage";
import EditProductPage from "./pages/EditProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ProductsPage />} />
          <Route path="fav-products" element={<FavouriteProductsPage />} />
          <Route
            path="search-results/:keyword"
            element={<SearchResultsPage />}
          />
          <Route path="new-product" element={<NewProductPage />} />
          <Route path="edit-product/:id" element={<EditProductPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
