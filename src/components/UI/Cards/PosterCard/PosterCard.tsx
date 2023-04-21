import { FC } from "react";
import Card from "@mui/material/Card";
import DownloadBtn from "../../Button/DownloadBtn";
import { downloadFileUrl } from "../../../../utils/downloadFileUrl";

interface IPoster {
  file_path: string;
}

interface IPosterCard {
  poster: IPoster;
}

const ActorCard: FC<IPosterCard> = ({ poster }) => {
  const { file_path } = poster;

  const download = () => {
    downloadFileUrl(`https://image.tmdb.org/t/p/original/${file_path}`);
  };

  return (
    <Card
      sx={{
        width: { xs: "100px", sm: "140px" },
        height: { xs: "150px", sm: "210px" },
        color: "white",
        position: "relative",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      {poster.file_path ? (
        <img
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(30,30,30,0.67)",
          }}
          src={`https://image.tmdb.org/t/p/w185_and_h278_face${file_path}`}
          alt="actor"
        />
      ) : null}
      <DownloadBtn download={download} />
    </Card>
  );
};

export default ActorCard;
