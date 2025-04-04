import Script from "next/script";
import "../../styles/common.css";
const Tickets: React.FC = () => {
  return (
    <div className="content-box">
      <div className="text-box">
        <div>
          <h1>Tickets</h1>
          <p>
            Tickets sind ab dem 01.09.2024 erhältlich. Der Ticketpreis beträgt 15 Euro.
            <br />
            <br />
            Das Ticket beinhaltet den Eintritt zu allen Konzerten und Vorträgen, sowie den Zugang zu den Sternenbeobachtungen.
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
