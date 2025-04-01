import "../../styles/common.css";
const Tickets : React.FC = () => { 
return (
    <div className="content-box">
      <div className="text-box">
        <div>
          <h1>Tickets</h1>
          <p>
            Tickets sind ab dem 01.09.2024 erhältlich. Der Ticketpreis beträgt 15 Euro.
            <br />
            <br />
            Das Ticket beinhaltet den Eintritt zu allen Konzerten und Vorträgen, sowie den Zugang zu den
            Sternenbeobachtungen.
          </p>
        </div>
        <br />
        <a className="more-info" href="/info">
          MEHR INFOS
        </a>
      </div>
    </div>
)
}

export default Tickets; 