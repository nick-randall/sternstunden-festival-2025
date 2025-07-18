import "../../styles/common.css";
import "../../styles/boring-pages.css";
import "../../styles/tickets.css";
import "../../styles/home.css";
import Ticketshop from "@/components/TicketShop";
import Spacer from "@/components/Spacer";
const Tickets: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <title>TICKETS | Sternstunden Festival</title>
      <meta name="description" content="Tickets online bestellen für das Sternstunden Festival 2025" />
      <meta name="twitter:image" content="/site-preview.jpg" />
      <meta name="twitter:title" content="Tickets | Sternstunden Festival" />
      <style>
        {`
        @media screen and (min-width: 1300px) {
          .ticket-page-link {
          display: none;
          }
        }`}
      </style>

      <Spacer height={30} />
      <a href="#shop-container-top" className="ticket-page-link">
        DIREKT ZU DEN TICKETS
      </a>
      <div className="content-box split-box">
        <div className="text-box">
          <div>
            <h1>TICKETS 2025</h1>
            <p>
              Für das Sternstunden Festival gibt es ermäßigte* Tickets und
              kostenlosen Eintritt für geflüchtete Personen*** sowie für Kinder unter 14 Jahren**. Ab heute gelten die Abendkassenpreise.
              <br />
            
              <h2>Abendkasse</h2>
               <b>Reguläre Tickets:</b>
              <br />
              Freitags-Ticket: 15 €<br />
              Samstags-Ticket: 20 €<br />
              Festivalticket (Fr & Sa) 25 €<br />
              <br />
             
              <b>Ermäßigte* Tickets:</b>
              <br />
              Freitags-Ticket: 10 €<br />
              Samstags-Ticket: 14 €<br />
              Festivalticket (Fr & Sa) 19 €<br />
              <br />
              <span style={{ fontSize: 14 }}>
                *Ermäßigungsberechtigt sind Studierende, Senior:innen, Schüler:innen, Auszubildende, Erwerbslose, Menschen mit Schwerbehinderung (ab
                GdB 50; bei eingetragenem Merkzeichen „B“ erhält eine Begleitperson freien Eintritt).
                <br />
                ** Kinder bis 14 Jahre kostenlos (bitte trotzdem hier für eure Kinder ein kostenloses Ticket bestellen).
                <br />
                *** Geflüchtete erhalten freien Eintritt gegen Vorlage einer gültigen Aufenthaltserlaubnis nach § 24 AufenthG oder § 25 Abs. 1, 2 oder
                3AufenthG oder jeweils in Verbindung mit einer gültigen Fiktionsbescheinigung. Für Geflüchtete aus der Ukraine gilt die Vorlage eines
                ukrainischen Reisepasses oder eines anderen Ausweisdokuments.
              </span>
              <br />
              <br />
              <b>**/***Hinweis</b>: Bestellt bitte auch bei freiem Eintritt ein entsprechendes kostenloses Ticket!
<s>
               <h2>Vorverkauf (endete am 17.7.)</h2>
              <b>Reguläre Tickets: </b>
              <br />
              Freitags-Ticket: 10 € <br />
              Samstags-Ticket: 15 € <br />
              Festivalticket (Fr & Sa) 20 € <br />
              <br />
              <b>Ermäßigte* Tickets:</b>
              <br />
              Freitags-Ticket: 7 €<br />
              Samstags-Ticket: 10 €<br />
              Festivalticket (Fr & Sa) 15 €<br />
              </s>
            </p>
              {/* Script is now dynamically added via useEffect */}
              <br />
            
          </div>
        </div>
        <div className="responsive-spacer-15" id="shop-container-top" />
        <div className="shop-container">
          <Ticketshop />
        </div>
        <div className="responsive-spacer-15" />
      </div>
    </div>
  );
};

export default Tickets;
