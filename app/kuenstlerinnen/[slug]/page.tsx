import Image from "next/image";
import "../../../styles/common.css";
import "../../../styles/artists.css";
import { getReadableDETimeAndDayAbbr } from "@/helper_functions/helperFunctions";
import { notFound } from "next/navigation";
import Spacer from "@/components/Spacer";
import Link from "next/link";

export async function generateStaticParams() {
  const artists = [];
  try {
    const response = await fetch("https://sternstunde.fly.dev/get-artists", { headers: { Accept: "application/json" } });
    // const response = await fetch("http://localhost:8080/get-artists", { headers: { Accept: "application/json" } });
    const foundartists = await response.json();
    artists.push(...foundartists);
  } catch (error) {
    const err = error as Error;
    console.error("Error fetching artists:", err.message);
  }
  return artists.map((a: ArtistWithEvents) => ({
    slug: a.artist.code,
  }));
}

const ArtistPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  let a: ArtistWithEvents | null = null;

  try {
    const response = await fetch(`https://sternstunde.fly.dev/get-artist/${slug}`, { headers: { Accept: "application/json" } });
    // const response = await fetch(`http://localhost:8080/get-artist/${slug}`, { headers: { Accept: "application/json" } });

    if (response.status === 404) {
      notFound();
    }
    if (!response.ok) {
      throw new Error(`Failed to fetch artist: ${response.statusText}`);
    }
    a = await response.json();
  } catch (error) {
    const errorMessage = error as Error;
    console.error("Error fetching artist details:", errorMessage.message);
  }

  if (!a) {
    return <div>Die Künstlerin konnte nicht gefunden werden</div>;
  }

  return (
    <div className="artist-page">
      <style>
        {`
        @media (max-width: 768px) {
          .featured-artist-card section {
            flex-direction: column;
            align-items: center;
            width: 400px;
          }
        }
          `}
      </style>
      <div className="featured-artist-card">
        <div className="heading">
          <h2>{a.artist.name}</h2>
          <Link className="back-button" href="/kuenstlerinnen">
            zurück
            <Spacer width={8} />
            <Image src="/close.png" alt="Zurück" width="24" height="24" />
          </Link>
        </div>
        <section>
          <Image className="artist-image" src={a.artist.imageUrl} alt={a.artist.name} height="400" width="400" />
          <Spacer width={16} />
          <div className="artist-and-events-details">
            <div>{a.artist.description}</div>
            <Spacer height={16} />
            <div className="divider" />
            {a.events &&
              a.events.map((e: ArtistEvent) => (
                <div key={e.id} className="artist-event">
                  <h2>{getReadableDETimeAndDayAbbr(e.startDateTime)}</h2>
                  <div className="artist-event-stage">{e.stage.name}</div>
                </div>
              ))}
            <Spacer height={16} />
            <div className="divider" />

            <a href={a.artist.artistUrl} target="_blank" rel="noopener noreferrer">
              <h2>Website</h2>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ArtistPage;
