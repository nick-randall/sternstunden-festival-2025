import Link from "next/link";
import "../../styles/boring-pages.css";
import "../../styles/common.css";
import Image from "next/image";

const Bewerbung = () => {
  return (
    <div className="boring-page-wrapper">
      <h1>Bewerbung Artists</h1> Auch beim diesjährigen Sternstunden Festival habt ihr die Möglichkeit unterschiedlichste musikalische Beiträge auf die Bühnen
      der wunderschönen Sternwarte Bergedorf zu bringen. Bewerbt euch hier bis zum 04. Mai. Wir freuen uns auf eure Anmeldungen!
      <p>
        <Link href="/info">Hier gibt es mehr Infos.</Link>
      </p>
      <p>
        Und hier nochmal&nbsp;
        <a href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAZAAIzJRyZUQ1RHV0hTSThCSUUwSjI2TFg2WURMU1NRWC4u&origin=lprLink&route=shorturl" title="Anmeldung für Künstler:innen">  
       der Link zur Anmeldung.
        </a>
      </p>
      <div style={{position: "relative", height: 500}}>
        <Image src="https://sternstunde.s3.ap-southeast-2.amazonaws.com/2024_photos/ssf24m43.jpg" alt="Band auf der Bühne" fill={true}/>
      </div>

    </div>
  );
};
export default Bewerbung;
