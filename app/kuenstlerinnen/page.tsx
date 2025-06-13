import Image from "next/image";
import "../../styles/common.css";
import "../../styles/artists.css";
import Spacer from "@/components/Spacer";
import Link from "next/link";
import { getReadableDETimeAndDayAbbr } from "@/helper_functions/helperFunctions";

const Artists: React.FC = async () => {
  const artistsData = [];
  try {
    const response = await fetch(`https://sternstunde.fly.dev/get-artists`, { headers: { Accept: "application/json",  }, method: "POST" });
    const foundartists = await response.json();
    artistsData.push(...foundartists);
  } catch (error) {
    const errorMessage = error as Error;
    console.error("Error fetching artists:", errorMessage.message);
  }
  artistsData.sort((a: ArtistWithEvents, b: ArtistWithEvents) => {
    if (a.artist.index === undefined || b.artist.index === undefined) {
      return 0;
    }
    return a.artist.index - b.artist.index;
  });
  const artists: ArtistWithEvents[] = artistsData.map((a: ArtistWithEvents) => {
          console.log(`Artist code ${a.artist.code}`);

    if (!a.artist.imageUrl || a.artist.imageUrl === "ZgotmplZ" || a.artist.imageUrl === "NULL") {
      return { ...a, artist: { ...a.artist, imageUrl: "/default-artist-image.png" } };
    } else {
      return a;
    }
  });
  return (
    <div className="artists-page-wrapper">
      <h1>Artists</h1>
      <div className="artists-grid">
        {artists.map((a: ArtistWithEvents) => (
          <Link key={a.artist.id} href={`/kuenstlerinnen/${a.artist.code}`} className="artist-link">
            <div key={a.artist.id} className={`artist-card ${a.artist.attributes.astroprogramm ? "astroprogramm" : ""}`}>
              <Image src={a.artist.imageUrl} alt={a.artist.name} width="265" height="265" />
              <div className="artist-details">
                <Spacer height={5} />
                <div className="artist-name">{a.artist.name}</div>
                <Spacer height={5} />
                {a.events &&
                  a.events.map((e: FestivalEvent) => (
                    <div key={e.id} className="artist-event">
 
                      <div className="artist-event-time">{getReadableDETimeAndDayAbbr(e.startDateTime)}</div>
                      <div className="artist-event-stage">{e.stage.name}</div>
                    </div>
                  ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Artists;
