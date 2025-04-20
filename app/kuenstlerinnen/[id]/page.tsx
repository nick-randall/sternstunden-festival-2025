import Image from "next/image";
import "../../../styles/common.css";
import "../../../styles/artists.css";
import { getDayPlus24HourTimeString } from "@/helper_functions/helperFunctions";
import { notFound } from "next/navigation";

interface ArtistPageProps {
  params: Promise<{ id: string }>;
}

const ArtistPage: React.FC<ArtistPageProps> = async ({ params }) => {
  const { id } = await params;
  let a: ArtistWithEvents | null = null;

  try {
    const response = await fetch(`https://sternstunde.fly.dev/get-artist/${id}`, { headers: { Accept: "application/json" } });
    // const response = await fetch(`http://localhost:8080/get-artist/${id}`, { headers: { Accept: "application/json" } });
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
      <h1>{a.artist.name}</h1>
      <p>{a.artist.description}</p>
      <Image src={a.artist.imageUrl} alt={a.artist.name} height="400" width="400" />
      {a.events &&
        a.events.map((e: ArtistEvent) => (
          <div key={e.id} className="artist-event">
            <div className="artist-event-time">{getDayPlus24HourTimeString(e.startDateTime)}</div>
            <div className="artist-event-stage">{e.stage.name}</div>
          </div>
        ))}
    </div>
  );
};

export default ArtistPage;
