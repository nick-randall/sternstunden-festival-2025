import { createPortal } from "react-dom";
import Image from "next/image";
import ".../../styles/common.css";
import "../../styles/artists.css";

interface ArtistProps {
  artist: Artist;
}

const Artist: React.FC<ArtistProps> = ({ artist }) => {
  return createPortal(
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
        position: "fixed",
        boxSizing: "content-box",
        backgroundColor: "black",
      }}
    >
      <Image src={artist.imageUrl} alt={artist.name} width="1000" height="1000" />
    </div>,
    document.body
  );
};

export default Artist;
