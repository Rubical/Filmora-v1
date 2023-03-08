import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";

const SignInBtn: FC = () => {
  return (
    <Box
      sx={{
        flexGrow: 0,
        color: "lightgray",
        justifySelf: "flex-end",
        padding: "0 15px 0 0 ",
      }}
    >
      <MenuItem>
        <Typography
          sx={{ fontSize: "14px", fontWeight: "600" }}
          textAlign="center"
        >
          SIGN IN
        </Typography>
      </MenuItem>
    </Box>
  );
};

export default SignInBtn;
