import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const SignInBtn: FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => {
        navigate("/Zenix_Film/login");
      }}
      sx={{
        flexGrow: 0,
        color: "lightgray",
        justifySelf: "flex-end",
        padding: { xs: "12px 5px 0 0", lg: "24px 40px 0 0" },
      }}
    >
      <Button
        disableRipple={true}
        sx={{
          fontSize: "14px",
          fontWeight: "600",
          color: "lightgray",
          transition: "color 0.1s ease-in",
          "&:hover": {
            color: "white",
          },
        }}
      >
        SIGN IN
      </Button>
    </Box>
  );
};

export default SignInBtn;
