import React, { FC } from "react";
import Card from "@mui/material/Card";

interface IYoutubeFrame {
  embedId: string;
}

const YoutubeFrame: FC<IYoutubeFrame> = ({ embedId }) => {
  return (
    <Card
      sx={{
        position: "relative",
        backgroundColor: "transparent",
        width: "753px",
        marginBottom: "150px",
        boxShadow: "none",
      }}
    >
      <iframe
        style={{
          width: "753px",
          height: "420px",
        }}
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </Card>
  );
};

export default YoutubeFrame;
