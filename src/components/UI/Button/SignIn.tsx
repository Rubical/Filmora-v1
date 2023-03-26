import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";

const SignInBtn: FC = () => {
  return (
    <Box
      sx={{
        flexGrow: 0,
        color: "white",
        justifySelf: "flex-end",
        padding: "24px 15px 0 0 ",
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
