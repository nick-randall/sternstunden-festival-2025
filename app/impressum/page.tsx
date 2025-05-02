import Spacer from "../../components/Spacer";
import "../../styles/common.css";
import "../../styles/boring-pages.css";

export default function Impressum() {
  return (
    <div className="boring-page-wrapper">
      <h1>Impressum</h1>
      <h3>Angaben gemäß § 5 TMG:</h3>
      <div>Förderverein der Unimusik Hamburg e.V.</div>
      <div>Postanschrift:</div>
      <div>Neue Rabenstraße 13 20354 Hamburg</div>
      <h3>Kontakt:</h3>
      <div>Telefon: +49 40 42838-5773 
        <br/>E-Mail: info@sternstundenfestival.de</div>
      <h3>Vertreten durch:</h3>
      <div>Prof. Thomas Posth</div>
      <h3>Eingetragen am</h3>
      <div>Amtsgericht Hamburg VR23665</div>
      <h3>Umsatzsteuer-Identifikationsnummer</h3>
      <div>DE 245 584 140</div>
      <h3 className="section-title">Hinweise zur Website</h3>
      <div>
        Urheberrechtliche Hinweise
        <br />
        Design: <a href="https://www.jakobtimm.de/"> Jakob Timm</a>
        <br />
        Umsetzung / Design: <a href="https://nick-codes.com"> Nicholas Randall</a>
        <br />
        Umsetzung: Katha Kögel
      </div>
      <h3 className="section-title">Information gemäß § 36 VSBG</h3>
      <div style={{ maxWidth: 800 }}>
        Gemäß § 36 VSBG (Verbraucherstreitbeilegungsgesetz - Gesetz über die alternative Streitbeilegung in Verbrauchersachen) erklärt der Betreiber
        dieser Website: Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        Hinweis Die Plattform der EU zur außergerichtlichen Streitbeilegung finden Sie online unter:
      </div>
      <Spacer height={20}></Spacer>
      <a href="https://ec.europa.eu/consumers/odr/">https://ec.europa.eu/consumers/odr/</a>
      <Spacer height={20}></Spacer>
      <p>
        Das Impressum wurde mit dem <a href="https://www.activemind.de/datenschutz/impressums-generator/" title="Impressumsgenerator">Impressums-Generator der activeMind AG </a>
        erstellt.
      </p>
      <Spacer height={20}></Spacer>
    </div>
  );
}
