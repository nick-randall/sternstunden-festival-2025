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
        Technische Umsetzung & Framework: <a href="https://nick-codes.com" target="_blank"> Nicholas Randall &#10154;</a>
        <br />
        Design & Konzept: <a href="https://www.jakobtimm.de/" target="_blank"> Jakob Timm &#10154;</a>
        <br />
        Beteiligung Inhaltspflege: Katharina Kögel
      </div>
      <h3 className="section-title">Information gemäß § 36 VSBG</h3>
      <div style={{ maxWidth: 800 }}>
        Gemäß § 36 VSBG (Verbraucherstreitbeilegungsgesetz - Gesetz über die alternative Streitbeilegung in Verbrauchersachen) erklärt der Betreiber
        dieser Website: Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        Hinweis Die Plattform der EU zur außergerichtlichen Streitbeilegung finden Sie online unter:
      </div>
      <Spacer height={20}></Spacer>
      <a href="https://ec.europa.eu/consumers/odr/" target="_blank">https://ec.europa.eu/consumers/odr/ &#10154;</a>
      <Spacer height={20}></Spacer>
      <h3 className="section-title">Wichtiger Hinweis</h3>
      <p>Wir sind stets bemüht, Ihnen auf dieser Website richtige und vollständige Informationen zur Verfügung zu stellen. Wir übernehmen keine Haftung oder Garantie für die Aktualität oder Vollständigkeit der bereitgestellten Informationen und sind nicht verantwortlich für die Inhalte der Seiten im Internet, auf die wir verweisen oder die mit einem Link von unserer Website erreichbar sind. Wir distanzieren uns von allen Inhalten außerhalb unseres eigenen Angebotes.</p>
      <p>
        Das Impressum wurde mit dem <a href="https://www.activemind.de/datenschutz/impressums-generator/" target="_blank" title="Impressumsgenerator">Impressums-Generator der activeMind AG &#10154; </a>
        erstellt.
      </p>
      <Spacer height={20}></Spacer>
    </div>
  );
}
