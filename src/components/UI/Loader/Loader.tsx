import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loader() {
  return (
    <Box
      sx={{
        alignSelf: "center",
        transform: "scale(1.5)",
      }}
    >
      <CircularProgress sx={{ color: "rgb(172,0,0)" }} />
    </Box>
  );
}
