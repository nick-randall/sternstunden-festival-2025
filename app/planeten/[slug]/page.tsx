import "../../../styles/common.css";
import "../../../styles/planet.css";
import Image from "next/image";
import PlayAudioButton from "@/components/PlayAudioButton";

interface IndividualPlanetProps {
  params: Promise<{ slug: string }>;
}

const IndividualPlanet: React.FC<IndividualPlanetProps> = async ({ params }) => {
  const { slug } = await params;
  const imageUrl = `https://sternstunde.s3.ap-southeast-2.amazonaws.com/planets/${slug}.avif`;
  const titles: { [key: string]: string } = {
    merkur: "Merles Märchen von Merkur",
    venus: "Vivi würdigt die Venus",
    erde: "Erde ohne Erklärung",
    mars: "Marv malt den Mars",
    jupiter: "Julia jubelt mit Jupiter",
    saturn: "Sara sinniert über Saturn",
    uranus: "Ursula untersucht den Uranus",
    neptun: "Nils News vom Neptun",
    pluto: "Kein Plan von Pluto",
  };

  return (
    <div className="planets-page-wrapper">
      <h1>{titles[slug] || slug}</h1>

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "600px",
          animation: "gentle-bounce 1.5s ease-in-out infinite",
        }}
      >
        <Image
          src={imageUrl}
          alt={slug}
          width={860}
          height={770}
          style={{
            width: "100%", // Make the image take up the full width of its container
            height: "auto", // Maintain the aspect ratio
            maxWidth: "600px", // Optional: Limit the maximum width
          }}
        />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          <PlayAudioButton audioUrl={`https://sternstunde.s3.ap-southeast-2.amazonaws.com/planets/${slug}.mp3`} />
        </div>
      </div>
    </div>
  );
};

export default IndividualPlanet;
