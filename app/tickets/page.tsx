{/*import "../../styles/common.css";
import "../../styles/boring-pages.css";
import "../../styles/tickets.css";
import "../../styles/home.css";
import Spacer from "@/components/Spacer";
const Tickets: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <title>TICKETS | Sternstunden Festival</title>
      <meta name="description" content="Tickets online bestellen für das Sternstunden Festival 2026" />
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
       <div className="boring-page-wrapper">
            <h1>TICKETS</h1>

            <p>
                ...gibt es im Moment keine.
            </p>
            
        </div>
    </div>
  );
};

export default Tickets; */}

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
            <meta name="description" content="Tickets online bestellen für das Sternstunden Festival 2026" />
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
    <h1>TICKETS 2026</h1>
    <p>
        Für das Sternstunden Festival gibt es drei Preisstufen: <strong>Early-Bird-Tickets, Online-Tickets und Abendkasse </strong>.
        <br/> Außerdem gibt es wieder ermäßigte* Tickets und <br/>
        kostenlosen Eintritt für Kinder unter 14 Jahren.
        <br/> <br/>
        <b> <strong> Hinweis </strong> </b>: Bestellt bitte auch bei freiem Eintritt ein entsprechendes kostenloses
        Ticket!

        <h2>Early-Bird-Ticket</h2>

        <b>Regulär: </b>
        <br/>
        Freitags-Ticket: 10 € <br/>
        Samstags-Ticket: 15 € <br/>
        Festivalticket (Fr & Sa) 20 € <br/>
        <br/>
        <b>Ermäßigt:</b>
        <br/>
        Freitags-Ticket: 7 €<br/>
        Samstags-Ticket: 10 €<br/>
        Festivalticket (Fr & Sa) 15 €<br/>

        <h2>Online-Ticket</h2>
        <b>Regulär: </b>
        <br/>
        Freitags-Ticket: 15 € <br/>
        Samstags-Ticket: 20 € <br/>
        Festivalticket (Fr & Sa) 25 € <br/>
        <br/>
        <b>Ermäßigt</b>
        <br/>
        Freitags-Ticket: 10€<br/>
        Samstags-Ticket: 15 €<br/>
        Festivalticket (Fr & Sa) 20 €<br/>
        <br/>

        <h2>Abendkasse</h2>
        <b>Regulär: </b>
        <br/>
        Freitags-Ticket: 17 € <br/>
        Samstags-Ticket: 22 € <br/>
        Festivalticket (Fr & Sa) 27 € <br/>
        <br/>
        <b>Ermäßigt:</b>
        <br/>
        Freitags-Ticket: 12€<br/>
        Samstags-Ticket: 17 €<br/>
        Festivalticket (Fr & Sa) 22 €<br/>
        <br/>

        <br/>
        <br/>

        <b> *</b> ermäßigungsberechtigt sind Studierende, Senior:innen, Schüler:innen, Auszubildende, Erwerbslose, Menschen mit Schwerbehinderung (ab GdB 50)<br/>
        <br/>
        <b> Beim Einlass ist ein entsprechender Berechtigungsnachweis vorzuzeigen.</b>
        {/* Script is now dynamically added via useEffect */}

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