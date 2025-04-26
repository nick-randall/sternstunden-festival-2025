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
          <strong>Konzept:</strong> <a href="https://www.deitz.eu/noemi"> Noemi Deitz</a> <br/>
           <strong>Sprecher:innen:</strong> Merle Juschka, Nilton Fonseca, Marvin J. Deitz, Vivien Rönneburg, Noemi Deitz, Julia Meier, Katja Lehmann, Sara Ricking | Schnitt: Vincent Ritter <br/>
            <strong>Design:</strong> {" "}
          <a href="https://www.jakobtimm.de/"> Jakob Timm</a> 
          <br/><strong>Umsetzung:</strong> Leonie Kurz / Nicholas Randall
          <br />
          <br />
          
          <strong>Dirigent:</strong> Thomas Posth | Sinfonieorchester der Universität Hamburg | Frauenchor des Kammerchors der Universität Hamburg [bei Neptun]{" "}
        </span>
      </p>
    </div>
  );
};

export default PlanetsPage;
