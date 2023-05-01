import { Box } from "@mui/material";
import { AppBarMain } from "common";
import { Outlet } from "react-router-dom";

export const MainLayout = (): JSX.Element => (
  <>
    <AppBarMain />
    <Box component="main" maxWidth="1600px" margin="auto">
      <Outlet />
    </Box>
  </>
);
