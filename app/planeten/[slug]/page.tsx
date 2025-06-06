import "../../../styles/common.css";
import "../../../styles/planet.css";
import Image from "next/image";
import PlayAudioButton from "@/components/PlayAudioButton";
import Link from "next/link";
import Spacer from "@/components/Spacer";

interface IndividualPlanetProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const planets = ["merkur", "venus", "erde", "mars", "jupiter", "saturn", "uranus", "neptun", "pluto"];
  return planets.map(slug => ({
    slug,
  }));
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

  const getClickRightUrl = () => {
    const currPlanet = Object.keys(titles).indexOf(slug);
    const nextPlanet = (currPlanet + 1) % Object.keys(titles).length;
    const nextSlug = Object.keys(titles)[nextPlanet];
    return `/planeten/${nextSlug}`;
  };

  const getClickLeftUrl = () => {
    const currPlanet = Object.keys(titles).indexOf(slug);
    const prevPlanet = (currPlanet - 1 + Object.keys(titles).length) % Object.keys(titles).length;
    const prevSlug = Object.keys(titles)[prevPlanet];
    return `/planeten/${prevSlug}`;
  };

  return (
    <div className="planets-page-wrapper">
      <h1>{titles[slug] || slug}</h1>
      <div className="heading">
        <h2>{titles[slug] || slug}</h2>
        <Link className="back-button" href="/planeten">
          zurück
          <Spacer width={8} />
          <Image src="/close.png" alt="Zurück" width="24" height="24" />
        </Link>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Link href={getClickLeftUrl()} className="chevron-right-link">
          <Image src="/chevron-right.svg" alt="Pfeil links" height="30" width="30" style={{transform: "rotateY(180deg)"}}/>
        </Link>
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "600px",
            animation: "gentle-bounce 1.5s ease-in-out infinite",
          }}
        >
          <Image className="planet-image" src={imageUrl} alt={slug} width={860} height={770} />
          <div className="play-audio-button">
            <PlayAudioButton audioUrl={`https://sternstunde.s3.ap-southeast-2.amazonaws.com/planets/${slug}.mp3`} />
          </div>
        </div>
        <Link href={getClickRightUrl()}>
          <Image src="/chevron-right.svg" alt="Pfeil rechts" height="30" width="30" />
        </Link>
      </div>
      <section className="planet-description">
        <p>Habt ihr das gehört?</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod distinctio consequuntur impedit debitis a voluptas voluptatibus, accusamus et
          sint ipsum quos dignissimos quia repellat ducimus. Fugiat delectus ab laudantium. Corrupti?
        </p>
      </section>
    </div>
  );
};

export default IndividualPlanet;
