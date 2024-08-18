import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
      // In Chinese and Japanese the characters are usually larger,
      // so a smaller fontsize may be appropriate.
      fontFamily:'sans-serif'
    },
});

export default theme;