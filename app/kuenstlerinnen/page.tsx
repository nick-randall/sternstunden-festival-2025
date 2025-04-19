import Image from "next/image";
import "../../styles/common.css";
import "../../styles/artists.css";
import Spacer from "@/components/Spacer";
import Link from "next/link";

const Artists: React.FC = async () => {
  const getDayPlus24HourTimeString = (date: string) => {
    const dateObj = new Date(date);
    const day = dateObj.getDay();
    const germanDay = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"][day];

    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${germanDay} ${hours}:${formattedMinutes}`;
  };
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
  artists.sort((a: ArtistWithEvents, b: ArtistWithEvents) => {
    if (a.artist.index === undefined || b.artist.index === undefined) {
      return 0;
    }
    return a.artist.index - b.artist.index;
  });
  return (
    <div className="artists-grid">
      {artists.map((a: ArtistWithEvents) => (
        <Link key={a.artist.id} href={`/kuenstlerinnen/${a.artist.id}`} className="artist-link">
          <div key={a.artist.id} className="artist-card">
            <Image src={a.artist.imageUrl} alt={a.artist.name} width="265" height="265" />
            <Spacer height={5} />
            <div className="artist-name">{a.artist.name}</div>
            <Spacer height={5} />
            {a.events.map((e: ArtistEvent) => (
              <div key={e.id} className="artist-event">
                <div className="artist-event-time">{getDayPlus24HourTimeString(e.startDateTime)}</div>
                <div className="artist-event-stage">{e.stage.name}</div>
              </div>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Artists;
