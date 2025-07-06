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

  const texts: { [key: string]: string } = {
    merkur: 'Habt ihr das gehört? <br /><br /> Das war Merkur, der geflügelte Götterbote, der hier hörbar als Planet um unsere Sonne kreist. Dabei dreht er sich bei einer Umkreisung drei mal um sich selbst! <br /><br /> Ich bin Merle und möchte euch den sonnennächsten und kleinsten Planeten unseres Sonnensystems ein wenig vorstellen. Wenn wir bei diesem Planeten von klein sprechen, dann müssen wir uns bewusst machen, dass der Durchmesser des Merkurs so lang ist, wie der Gelbe Fluss (chinesisch Huáng Hé), welcher durch Asien zieht und der achtlängste Fluss der Welt ist. Apropos Gelb: Wusstet ihr dass man den Merkur am Morgen oder Abendhimmel für maximal eine Stunde als orangenen Punkt sehen kann? <br /><br /> Ihr merkt schon, bei dem Stück ist ganz schön was los, das liegt vor allem an zwei Dingen: dem Tempo Vivace, welches lebhaft oder lebendig bedeutet und den wechselnden Soloinstrumenten. So hört man den Götterboten Merkur hier von der Geige zur Oboe springen dann über die Querflöte zum Glockenspiel. <br /><br /> Ganz wie ich mir so einen fliegenden Götterboten vorstelle, flattert er als Gott der Reisenden von einem Instrument zum nächsten. Vielleicht besucht er uns ja auch mal auf der Erde… Ob er den Weg von 75 Millionen Kilometern zu uns schafft? <br /><br /> Hören wir nochmal, wie unser Mercury ins Universum davonfliegt… <br /><br /> gesprochen von Merle Juschka (ChorChesterCollab)',
    venus: "Hallo, ich bin Vivi und wir reisen zusammen mit Gustav Holst musikalisch zur Venus.  <br /><br /> Sein Stück hat Holst genannt: „Venus – die Friedensbringerin“. Am Anfang ist die Venus dabei ganz leise, fast ein bisschen vorsichtig. Vielleicht traut man dem Frieden noch nicht so ganz. Hören wir uns das mal an. <br /><br /> Zwischendurch hört man aber auch, wie sie richtig in Fahrt kommt. Dann kommen ganz viele Instrumente dazu. Aber richtig laut wird die Venus nicht. Laut wie Kriege, Bomben, Streit und Zanken ist unsere Friedensbringerin nicht, sondern eher wie ein leises Lachen.<br /><br />Wusstest du eigentlich, dass man die Venus sehen kann? Morgens und abends steht sie manchmal am Himmel und wird deshalb auch der Morgenstern oder der Abendstern genannt. Aber ganz klar, das weißt du auch: Ein Stern ist sie eigentlich nicht, sondern ein Planet. Ich finde am Ende hört man, wie sie wieder untergeht und sich ganz friedlich verabschiedet und sich freut, dass sie uns ein bisschen Frieden gebracht hat. <br /><br />gesprochen von Vivien Rönneburg (Bettina & Bettina)",
    erde: "Unsere Erde, der blaue Planet, wie sie auch genannt wird, vertonte Gustav Holst nicht. Wenn du möchtest, dann kannst du jetzt dein Lieblingslied anmachen und ganz wild dazu tanzen. Oder fliege weiter durchs Weltall zum nächsten Planeten. <br /><br /> gesprochen von Noemi Deitz",
    mars: "Ihr hört es sofort: Der Mars klingt düster, bedrohlich, unheimlich – bei Holst ist er der Kriegsbringer – kein Wunder, denn er ist nach dem römischen Kriegsgott benannt – Mars. Das hat mit seiner Farbe zu tun: Durch seine feuerrote Oberfläche wirkte der Planet früher aggressiv und gefährlich auf die Menschen – genau wie ihr Kriegsgott. <br /><br /> Heute wissen wir, dass die rote Farbe durch Eisenoxid entsteht. Und das ist nichts anderes als Rost. Eigentlich ziemlich ungefährlich, oder? <br /><br /> Deshalb hat es der Mars überhaupt nicht verdient, dass wir so schlecht über ihn reden. Gefährlich ist er nicht, im Gegenteil: In unserem Sonnensystem ist er der Planet, der unserer Erde am ähnlichsten ist. Und er ist unser Nachbar. Das heißt, wenn wir Menschen irgendwann einmal auf einem anderen Planten leben wollen – oder müssen –, dann auf dem Mars. Was nicht bedeutet, dass ihr einfach mal schnell hinfliegen könntet. Allein die Reise würde schlappe acht Monate dauern. Wenn Ihr ankommt, müsst Ihr Euch auf  ungewohnte Temperaturen einstellen – tagsüber zwischen 20 und 125 Grad, nachts bis zu minus 80 Grad. Es gibt aber auch gute Nachrichten. Die wichtigste: Der Mars hat Wasser. Leben ist also möglich, auch wenn bisher noch keine Lebewesen entdeckt wurden. Das heißt, auch keine Marsmenschen. <br /><br /> Achja: Der Schokoriegel hat nichts mit dem Planeten zu tun. Den hat einfach nur ein Mann namens Frank Clarence Mars erfunden. Ich heiße übrigens Marv. Marv wie Mars. <br /><br /> gesprochen von Marvin J. Deitz",
    jupiter: "Hallo ich bin Julia. Julia, wie Jupiter.  <br /><br /> Jupiter ist der größte Planet des Sonnensystems. Auch er ist benannt nach einer Gottheit der alten Römer. Für sie war Jupiter der höchste Gott und der Vater der Götter. Kein Wunder also, dass der Planet Jupiter auch als König des Sonnensystems gilt. <br /><br /> Und so klingt als der Jupiter bei Holst auch: majestätisch. Eine richtige Hymne ist das. Aber Jupiter - das ist nicht nur der König. Bei Holst ist er auch der Bringer der Fröhlichkeit. Auch das kann man hören - vielleicht erkennst Du ja, welche Instrumente mitspielen.  <br /><br /> Das klingt ziemlich fröhlich oder? Man bekommt direkt Lust zu tanzen. Oder was machst du gerne, wenn du so richtig fröhlich bist?  <br /><br /> gesprochen von Julia Meier",
    saturn: "In diesem Beitrag zum Saturn geht es um den Tod. Wenn du dich mit dem Thema gerade nicht wohl fühlst, geh’ einfach zum nächsten Planeten oder höre dir das Folgende nicht allein an.  <br /><br /> Den Saturn können wir, wenn er richtig steht, mit bloßem Auge im Himmel sehen. Um den Bauch des Planeten verlaufen über hunderttausend Ringe – die sind aber nur durch ein Teleskop zu erkennen.  <br /><br /> Schon in der Antike haben die Menschen den Saturn beobachtet und ihn mit dem Tod in Verbindung gebracht. Vor dem Tod fürchten sich viele Menschen. Es macht sie traurig und ängstlich, dass das Leben irgendwann vorbei ist. Auch Holst, der Komponist der Planeten-Suite, hat sich damit beschäftigt – das können wir im Saturn hören.  <br /><br /> Der Satz beginnt ganz ruhig und langsam; die Flöte und die Streichinstrumente erinnern an läutende Kirchenglocken zu einer Beerdigung. Hör’ mal: Das klingt gerade alles traurig und beunruhigend. Jetzt kommen immer mehr Instrumente dazu und die Musik wird noch dramatischer.  <br /><br />  Was brauchen wir, wenn wir traurig sind und Angst haben? Genau – wir wollen getröstet werden! Und so hat Holst das Ende des Saturn-Satzes komponiert – die Musik klingt jetzt weicher und leichter – und ein bisschen nach Vogelgesang.  <br /><br /> gesprochen von Sara Ricking",
    uranus: "Für den nächsten Planeten sollte man sich besser warm anziehen, denn er ist einer der kältesten in unserem Sonnensystem, auf ihm kann es bis zu minus 214 Grad kalt werden. Bei dem blau-grünen Eisriesen handelt es sich um Uranus, den drittgrößten Planeten unseres Sonnensystems - unsere Erde würde ganze 64-mal in ihn hineinpassen.  <br /><br /> Und warum ist Uranus jetzt der Magier? Jedenfalls nicht wegen seines guten Geruchs. Wäre es möglich, Uranus zu erschnüffeln, würde er nach fauligen Eiern riechen. In seiner Atmosphäre findet sich nämlich streng riechender Schwefelwasserstoff.  <br /><br /> Der Magier der Planeten scheint sich vielmehr musikalisch auszutoben, mal langsam, mal schnell, mal leise, mal laut. Hin und her springt er zwischen tiefen und hohen Tönen wie ein unberechenbarer Zauberer, dessen nächsten Schritt man nicht vorhersehen kann. <br /><br /> gesprochen von Ursula alias Katja Lehmann",
    neptun: "Bei unserer Reise ins Weltall sind wir jetzt ganz weit draußen angekommen, fast am Ende des Sonnensystems, und finden dort einen geheimnisvollen blauen Planeten.  <br /><br /> Hey, ich bin der Nil und ich stelle euch den Neptun vor. Der Neptun ist der achte und letzte Planet von der Sonne aus, und sieht aus wie ein leuchtender blauer Edelstein. Die Musik, die Gustav Holst für diesen Planeten geschrieben hat, heißt „Neptun – der Mystische“. Sie klingt auch sanft und geheimnisvoll, als ob sie aus weiter Ferne kommt.  <br /><br /> Neptun ist aber nicht nur wunderschön blau, sondern auch der stürmischste Planet, den wir kennen. Auf ihm wehen Winde schneller als jeder Sturm auf der Erde. Diese Winde können sogar schneller sein als ein Düsenflugzeug. Wenn du genau hinhörst, kannst du vielleicht das Heulen dieser schnellen Winde hören, die wie unsichtbare Geister durch die blauen Wolken jagen.  <br /><br /> Und zum Schluss hören wir das Glitzern von Neptuns Ringen. Sie sind wie kleine, funkelnde Hula-Hoop-Reifen, die im Takt der Musik leise und geheimnisvoll klingen. Wir hören außerdem am Ende noch einen Chor, der immer leiser wird und uns in die Tiefen des Weltalls schickt.  <br /><br /> gesprochen von Nilton Fonseca (Nil, Gregor in der Kuppel, Nimm 8)",
    pluto: "Den Pluto hat Gustav Holst nicht vertont. Den kannte er gar nicht, denn Pluto wurde erst 1930 entdeckt. Heute wissen wir: Pluto zählt gar nicht zu den „echten“ Planeten, sondern ist nur ein Zwergplanet.  <br /><br /> gesprochen von Noemi Deitz",
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
     <div
  className="planet-text"
  dangerouslySetInnerHTML={{ __html: texts[slug] || "Hier gibt es keine Beschreibung für diesen Planeten." }}
/>
      </section>
    </div>
  );
};

export default IndividualPlanet;
