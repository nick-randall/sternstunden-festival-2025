import Image from "next/image";
import "../../../styles/common.css";
import "../../../styles/artists.css";
import { getDayPlus24HourTimeString } from "@/helper_functions/helperFunctions";
import { notFound } from "next/navigation";

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
  // artists.sort((a: ArtistWithEvents, b: ArtistWithEvents) => {
  //   if (a.artist.index === undefined || b.artist.index === undefined) {
  //     return 0;
  //   }
  //   return a.artist.index - b.artist.index;
  // });
  return artists.map((a: ArtistWithEvents) => ({
    slug: a.artist.code,
    // name: a.artist.name,
    // description: a.artist.description,
    // imageUrl: a.artist.imageUrl,
    // events: a.events,
  }));
}
// const ArtistPage = async ({
//   params,
// }: {
//   params: Promise<{ id: string }>
// }) => {
//   const p = await params;
//   return <h1>{p.id}</h1>;
// };

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
