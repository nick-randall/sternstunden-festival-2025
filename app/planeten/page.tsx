import "../../styles/common.css";
import AudioPlayer from "@/components/BigAudioPlayer";
import PlanetScene from "@/components/PlanetScene";

const PlanetsPage: React.FC = () => {
  return (
    <div className="planets-page-wrapper">
      <h1>Planetenrundgang</h1>

      <AudioPlayer />
      <audio src="https://sternstunde.s3.ap-southeast-2.amazonaws.com/planets/hoerspielversion.mp3"></audio>

      <p>
        Der Komponist Gustav Holst hat vor etwa 100 Jahren unsere Planeten vertont. Das Orchester der Universität Hamburg hat die Planeten-Suite 2020
        aufgeführt. Hört doch mal rein, wie unterschiedlich die Planeten schwingen und klingen!
      </p>
      <PlanetScene />
      <p>
        <span style={{ fontSize: 14 }}>
          Konzept: <a href="https://www.deitz.eu/noemi"> Noemi Deitz</a> | Schnitt: Vincent Ritter | Design:{" "}
          <a href="https://www.jakobtimm.de/"> Jakob Timm</a> | Umsetzung: Leonie Kurz / Nicholas Randall
          <br />
          <br />
          Dirigent: Thomas Posth | Sinfonieorchester der Universität Hamburg | Frauenchor des Kammerchors der Universität Hamburg [bei Neptun]{" "}
        </span>
      </p>
    </div>
  );
};

export default PlanetsPage;
