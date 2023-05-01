import { createTheme } from "@mui/material/styles";

import { general } from "./general";
import { typography } from "./typography";

const initTheme = {
  ...general,
  typography,
};

export const theme = createTheme(initTheme);
