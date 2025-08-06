import "../../styles/common.css";
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

export default Tickets;
