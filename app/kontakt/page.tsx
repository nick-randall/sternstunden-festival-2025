import Link from "next/link";
import "../../styles/common.css";
import "../../styles/contact-page.css";
import Spacer from "@/components/Spacer";
const KontaktPage: React.FC = () => {
  return (
    <>
      <div className="contact-form-container">
        <h1>KONTAKT</h1>
        <Link href="mailto:info@sternstundenfestival.de">info@sternstundenfestival.de</Link>
        {/* <Flex width="100%" justifyContent="center" alignItems="center" flexGrow="1"> */}
        <Spacer height={16} />
        <div className="contact-form-row">
          <div className="item">
            <label htmlFor="first-name">Vorname</label>
            <input type="text" />
          </div>
          <div className="item">
            <label htmlFor="first-name">Nachname</label>
            <input type="text" />
          </div>
        </div>
        <div className="contact-form-row">
          <div className="item">
            <label htmlFor="first-name">Email-Adresse *</label>
            <input type="text" />
          </div>
        </div>
        <div className="contact-form-row">
          <div className="item">
            <label htmlFor="first-name">Nachricht Schreiben</label>
            <textarea className="message" />
          </div>
        </div>
        <div className="contact-form-row">
          <div className="item">
            <button>Absenden</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default KontaktPage;
