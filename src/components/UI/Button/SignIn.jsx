import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";

const SignInBtn = () => {
  return (
    <Box sx={{ flexGrow: 0, color: "lightgray" }}>
      <MenuItem>
        <Typography textAlign="center">SIGN IN</Typography>
      </MenuItem>
    </Box>
  );
};

export default SignInBtn;
