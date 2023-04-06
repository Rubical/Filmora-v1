import React, { FC, useEffect } from "react";
import Card from "@mui/material/Card";
import comingSoon from "./coming-soon.jpg";

interface IYoutubeFrame {
  embedId: string;
}

const YoutubeFrame: FC<IYoutubeFrame> = ({ embedId }) => {
  return (
    <Card
      sx={{
        position: "relative",
        zIndex: "2",
        backgroundColor: "transparent",
        width: "753px",
        marginBottom: "150px",
        boxShadow: "none",
      }}
    >
      {embedId ? (
        <iframe
          style={{
            width: "753px",
            height: "420px",
          }}
          src={`https://www.youtube.com/embed/${embedId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ) : (
        <img style={{ width: "753px", height: "420px" }} src={comingSoon} />
      )}
    </Card>
  );
};

export default YoutubeFrame;
