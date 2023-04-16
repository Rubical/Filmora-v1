import React, { FC, useEffect } from "react";
import Card from "@mui/material/Card";
import noSources from "./no-sources.jpg";

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
        <img style={{ width: "753px", height: "420px" }} src={noSources} />
      )}
    </Card>
  );
};

export default YoutubeFrame;
