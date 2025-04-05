import Image from "next/image";
import "../../styles/common.css";
import "../../styles/artists.css";
import Spacer from "@/components/Spacer";
import Link from "next/link";

const Artists: React.FC = async () => {
  const artists = [];
  try {
    const response = await fetch("https://sternstunde.fly.dev/get-artists");

    // const response = await fetch("http://localhost:8080/get-artists", { headers: { Accept: "application/json" } });
    const foundartists = await response.json();
    artists.push(...foundartists);
  } catch (error) {
    const errorMessage = error as Error;
    console.error("Error fetching artists:", errorMessage.message);
  }
  artists.sort((a: Artist, b: Artist) => a.index - b.index);
  return (
    <div className="artists-grid">
      {artists.map((artist: Artist) => (
        <Link key={artist.id} href={`/kuenstlerinnen/${artist.id}`} className="artist-link">
          <div key={artist.id} className="artist-card">
            <Image src={artist.imageUrl} alt={artist.name} width="265" height="265" />
            <Spacer height={5} />
            <div className="artist-name">{artist.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Artists;
