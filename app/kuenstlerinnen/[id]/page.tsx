interface ArtistPageProps {
  params: Promise<{ id: string }>;
}

const ArtistPage: React.FC<ArtistPageProps> = async ({ params }) => {
  const { id } = await params;
  let artist: Artist | null = null;

  try {
    const response = await fetch(`https://sternstunde.fly.dev/get-artist/${id}`);
    artist = await response.json();
  } catch (error) {
    const errorMessage = error as Error;
    console.error("Error fetching artist:", errorMessage.message);
  }

  if (!artist) {
    return <div>Artist not found</div>;
  }

  return (
    <div className="artist-page">
      <h1>{artist.name}</h1>
      <p>{artist.description}</p>
      <img src={artist.imageUrl} alt={artist.name} />
    </div>
  );
}

export default ArtistPage;