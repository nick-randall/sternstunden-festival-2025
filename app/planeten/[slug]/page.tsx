import "../../../styles/common.css";
import Image from "next/image";

interface IndividualPlanetProps {
  params: Promise<{ slug: string }>;
}

const IndividualPlanet: React.FC<IndividualPlanetProps> = async ({ params }) => {
  const { slug } = await params;
  const imageUrl = `https://sternstunde.s3.ap-southeast-2.amazonaws.com/planets/${slug}.png`;

  return (
    <div style={{ maxHeight: "100%", width: "auto", position: "relative" }}>
      <Image src={imageUrl} alt={slug} height="400" width="400" />
      <button id="play-icon" style={{ position: "absolute", top: "50%", left: "50%" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 57" className="twoColors"><g fill="none"><path fill="#2B328C" d="M28.5 0C12.76 0 0 12.76 0 28.5S12.76 57 28.5 57 57 44.24 57 28.5 44.24 0 28.5 0"></path><path fill="#999DC8" d="M21 38V19l17 9.5z"></path></g></svg>

      </button>
      <audio src=""></audio>
    </div>
  );
};

export default IndividualPlanet;
