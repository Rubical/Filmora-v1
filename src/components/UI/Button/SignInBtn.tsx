import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const SignInBtn: FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        flexGrow: 0,
        color: "lightgray",
        justifySelf: "flex-end",
        padding: { xs: "12px 5px 0 0", lg: "24px 40px 0 0" },
      }}
    >
      <Button
        onClick={() => {
          navigate("/Zenix_Film/login");
        }}
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
