import Image from "next/image";
import "../../styles/common.css";
import "../../styles/artists.css";
import Spacer from "@/components/Spacer";
import Link from "next/link";
import { getReadableDETimeAndDayAbbr } from "@/helper_functions/helperFunctions";
import { getPlaceholderImage } from "@/helper_functions/createBlurredImages";
import FestivalAppPopup from "@/components/FestivalAppPopup";
import artistsData from "../../festival_data_2025/artists";

const Artists: React.FC = async () => {
  // const artistsData = [];
  // try {
  //   const response = await fetch(`https://sternstunde.fly.dev/get-artists`, { headers: { Accept: "application/json" }, method: "POST" });
  //   const foundartists = await response.json();
  //   artistsData.push(...foundartists);
  // } catch (error) {
  //   const errorMessage = error as Error;
  //   console.error("Error fetching artists:", errorMessage.message);
  // }
  // artistsData =
  artistsData.sort((a: ArtistWithEvents, b: ArtistWithEvents) => {
    if (a.artist.index === undefined || b.artist.index === undefined) {
      return 0;
    }
    return a.artist.index - b.artist.index;
  });
  const artists: ArtistWithEvents[] = artistsData.map((a: ArtistWithEvents) => {
    console.log(`${a.artist.code}`);

    if (!a.artist.imageUrl || a.artist.imageUrl === "ZgotmplZ" || a.artist.imageUrl === "NULL") {
      return { ...a, artist: { ...a.artist, imageUrl: "/default-artist-image.png" } };
    } else {
      return a;
    }
  });
  const usePlaceHolders = process.env.GENERATE_PLACEHOLDERS;
  const images: ImageWithPlaceholder[] = [];

  if (usePlaceHolders !== "false") {
    const imagesWithPlaceholders = await Promise.all(
      artists.map(async (artist: ArtistWithEvents) => {
        if (!artist.artist.imageUrl || artist.artist.imageUrl === "ZgotmplZ" || artist.artist.imageUrl === "NULL") {
          return { src: "/default-artist-image.png", placeholder: "/default-artist-image.png" };
        }
        const imageWithPlaceholder = await getPlaceholderImage(artist.artist.imageUrl);
        return imageWithPlaceholder;
      })
    );
    images.push(...imagesWithPlaceholders);
  } else {
    const imagesWithOutPlaceholders: ImageWithPlaceholder[] = artists.map((artist: ArtistWithEvents) => {
      if (!artist.artist.imageUrl || artist.artist.imageUrl === "ZgotmplZ" || artist.artist.imageUrl === "NULL") {
        return { src: "/default-artist-image.png", placeholder: "/default-artist-image.png" };
      }
      return { src: artist.artist.imageUrl, placeholder: undefined };
    });
    images.push(...imagesWithOutPlaceholders);
  }
  const artistsWithPlaceholders: ArtistWithEventsAndPlaceholderImage[] = [];
  for (let i = 0; i < artists.length; i++) {
    const artistWithEvents = artists[i];
    const image = images[i];
    const artist = { ...artistWithEvents.artist, image };
    artistsWithPlaceholders.push({ ...artistWithEvents, artist });
  }

  return (
    <div className="artists-page-wrapper">
      <h1>Programm</h1>
      <div className="artists-grid">
        {artistsWithPlaceholders.map((a: ArtistWithEventsAndPlaceholderImage) => (
          <Link key={a.artist.id} href={`/kuenstlerinnen/${a.artist.code}`} className="artist-link">
            <div key={a.artist.id} className={`artist-card ${a.artist.attributes?.astroprogramm ? "astroprogramm" : ""}`}>
              <Image
                src={a.artist.imageUrl}
                alt={a.artist.name}
                width="265"
                height="265"
                placeholder={a.artist.image.placeholder ? "blur" : undefined}
                blurDataURL={a.artist.image.placeholder}
              />
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
            <Spacer height={30} />
          </Link>
        ))}
      </div>
      <FestivalAppPopup />
    </div>
  );
};

export default Artists;
