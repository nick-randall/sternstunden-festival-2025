import Script from "next/script";
import "../../styles/common.css";
const Tickets: React.FC = () => {
  return (
    <div className="content-box">
      <div className="text-box">
        <div>
          <h1>Tickets 2025</h1>
          <p>

            Für das Sternstunden Festival gibt es zwei Preisstufen: Vorverkauf und Abendkasse.
            Außerdem gibt es wieder ermäßigte* Tickets und kostenlosen Eintritt für geflüchtete Personen*** sowie für Kinder unter 14 Jahren**.
            <br/> <br/>Der Vorverkauf endet am 17. Juli.
            <br/><br/>
            <b>Reguläre Tickets im Vorverkauf: </b><br/>
            Freitags-Ticket: 10 € <br/>
            Samstags-Ticket: 15 € <br/>
            Festivalticket (Fr & Sa) 20 € <br/>
            <br/>
            <b>Reguläre Tickets an der Abendkasse:</b><br/>
            Freitags-Ticket: 15 €<br/>
            Samstags-Ticket: 20 €<br/>
            Festivalticket (Fr & Sa) 25 €<br/>
            <br/>
            <b>Ermäßigte* Tickets im Vorverkauf:</b><br/>
            Freitags-Ticket: 7 €<br/>
            Samstags-Ticket: 10 €<br/>
            Festivalticket (Fr & Sa) 15 €<br/>
            <br/>
            <b>Ermäßigte* Tickets an der Abendkasse:</b><br/>
            Freitags-Ticket: 10 €<br/>
            Samstags-Ticket: 14 €<br/>
            Festivalticket (Fr & Sa) 19 €<br/>
            <br/>
            <span style={{fontSize:14}}>
            *Ermäßigungsberechtigt sind Studierende, Senior:innen, Schüler:innen, Auszubildende, Erwerbslose, Menschen
            mit Schwerbehinderung (ab GdB 50; bei eingetragenem Merkzeichen „B“ erhält eine Begleitperson freien
            Eintritt).<br/>
            ** Kinder bis 14 Jahre kostenlos (bitte trotzdem hier für eure Kinder ein kostenloses Ticket bestellen).<br/>
            *** Geflüchtete erhalten freien Eintritt gegen Vorlage einer gültigen Aufenthaltserlaubnis nach § 24
            AufenthG oder § 25 Abs. 1, 2 oder 3AufenthG oder jeweils in Verbindung mit einer gültigen
            Fiktionsbescheinigung. Für Geflüchtete aus der Ukraine gilt die Vorlage eines ukrainischen Reisepasses oder
            eines anderen Ausweisdokuments.
            </span>
        <br/><br/>

          <b>**/***Hinweis</b>: Bestellt bitte auch bei freiem Eintritt ein 0-Euro-Ticket!


            <br/>
            <br/>

          </p>
        </div>
        <br />
        <div id="shop-frame" data-url="https://shop.weeztix.com/eddc7fdc-06c6-11ee-94ba-6a57c78572ab" style={{maxWidth: 600, margin:"0 auto;"}}></div>
        <Script src="https://shop.weeztix.com/build/integrate.js"></Script>

      </div>
    </div>
  );
};

export default Tickets;
