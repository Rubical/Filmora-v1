import { FC, useState } from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const FilmInput: FC = () => {
  const [value, setValue] = useState("");

  return (
    <Box
      sx={{
        border: "2px solid white",
        marginRight: { xs: "0", md: "100px" },
        marginTop: { xs: "15px", sm: "0" },
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          maxWidth: "170px",
          color: "white",
          input: {
            "&::placeholder": {
              opacity: 1,
            },
          },
        }}
        placeholder="Search"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <IconButton
        type="button"
        sx={{ p: "10px", color: "white" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default FilmInput;
