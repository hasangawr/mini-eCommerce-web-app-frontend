import { Container } from "@mui/material";
import MainAppBar from "../components/MainAppBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Container maxWidth="xl" sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <MainAppBar />
      <Outlet />
    </Container>
  );
};

export default MainLayout;
