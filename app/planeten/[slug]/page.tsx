import Flex from "@/components/Flex";
import "../../../styles/common.css";
import Image from "next/image";

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
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <h1>{titles[slug] || slug}</h1>

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

      <audio src={`https://sternstunde.s3.ap-southeast-2.amazonaws.com/planets/${slug}.mp3`} ></audio>
      <script>
        {`
          // clear any previous audio
          const previousAudio = document.querySelector("audio");
          if (previousAudio) {
            previousAudio.pause();
            previousAudio.src = "";
          }
          // play the new audio
          const audio = document.querySelector("audio");
          console.log(audio);
          if (audio) {
            audio.src = \`https://sternstunde.s3.ap-southeast-2.amazonaws.com/planets/${slug}.mp3\`;
            audio.play();
          }
        `}
      </script>
    </Flex>
  );
};

export default IndividualPlanet;
