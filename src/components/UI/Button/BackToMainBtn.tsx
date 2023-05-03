import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import UndoIcon from "@mui/icons-material/Undo";

interface IBackToMainBtn {
  isBtnVisible?: boolean;
}

const BackToMainBtn: FC<IBackToMainBtn> = ({ isBtnVisible }) => {
  const navigate = useNavigate();

  const backToMainPage = () => {
    navigate("/Zenix_Film");
  };

  return (
    <Button
      onClick={backToMainPage}
      sx={{
        position: "absolute",
        top: "20px",
        left: { xs: "10px", md: "20px" },
        transform: { xs: "scale(1.5)", md: "scale(2)" },
        zIndex: "300",
        padding: "0px",
        opacity: isBtnVisible === undefined ? "1" : isBtnVisible ? "1" : "0",
        transition: "transform 0.3s ease-in",
        "&:hover": {
          backgroundColor: "transparent",
          transform: "scale(2) rotate(-45deg)",
        },
      }}
      disableRipple={true}
    >
      <UndoIcon />
    </Button>
  );
};

export default BackToMainBtn;
