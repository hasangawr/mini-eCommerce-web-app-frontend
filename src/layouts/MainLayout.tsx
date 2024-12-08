import { Container } from "@mui/material";
import MainAppBar from "../components/MainAppBar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../redux/slices/productsSlice";
import { AppDispatch } from "../redux/store";

const MainLayout = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchAllProducts = async () => {
      await dispatch(fetchProducts());
    };

    fetchAllProducts();
  }, [dispatch]);

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <MainAppBar />
      <Outlet />
    </Container>
  );
};

export default MainLayout;
