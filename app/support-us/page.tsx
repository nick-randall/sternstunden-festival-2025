"use client";
import "../../styles/common.css";
import "../../styles/boring-pages.css";
import Spacer from "@/components/Spacer";
import CollapsibleText from "@/components/CollapsibleTextBox";
import { useState } from "react";

const Faqs = () => {
  const [currOpen, setCurrOpen] = useState(-1);
  const toggleOpen = (index: number) => {
    if (currOpen === index) {
      setCurrOpen(-1);
    } else {
      setCurrOpen(index);
    }
  };
  return (
    <div className="boring-page-wrapper">
      <title>Support Us! | Sternstunden Festival</title>
      <link rel="canonical" href="https://www.sternstundenfestival.de/support-us"/>
      <meta name="description" content="Unterstütze das Sternstunden Festival 2025 mit einer Spende, als Sponsor oder als Helfer:in." />
      <div className="collapsible-text-boxes">
        <CollapsibleText
          title="SPONSORING"
          text={
            <div>
              <h3> Sponsor werden? Sehr gern!</h3>
              Das Sternstunden Festival lebt von Engagement – auch von Partner:innen aus Wirtschaft und Gesellschaft. Ob mit finanzieller
              Unterstützung oder Sachleistungen wie Technik, Materialien oder Verpflegung: Jede Form von Sponsoring hilft uns, Kultur und Wissenschaft
              für alle zugänglich zu machen. Wir bieten drei Sponsoring-Pakete – oder gestalten gemeinsam ein individuelles Modell. Mehr Informationen
              und warum sich eine Partnerschaft lohnen kann in unserem
              <a href="https://drive.google.com/file/d/1tA0ZSmtFKyFFrA8xUp_mBrO4HznoVbEH/view?usp=sharing" target="_blank" title="Sponsoring Folder">
                <strong> Sponsoring Folder &#10154;</strong>
              </a>.
                <Spacer height={16} />
              Unternehmen können Förderbeträge von der Steuer absetzen!
              <br />
            </div>
          }
          isOpen={currOpen === 0}
          handleClick={() => toggleOpen(0)}
        />
        <CollapsibleText
          title="SPENDEN"
          text={
            <div>
              <h3>Auch Privatleute können uns unterstützen!</h3>
              Als <strong> ehrenamtlich organisierte Non-Profit-Veranstaltung</strong> sind wir auf <strong> gemeinschaftliche Unterstützung</strong>{" "}
              angewiesen, um unser Festival möglich zu machen. Das Sternstunden Festival kannst du auch mit einer Spende als Privatperson fördern. So
              leistest du deinen Beitrag, die Kultur und Wissenschaft Hamburgs abseits des Mainstreams zu bereichern. Wenn du uns unter die Arme
              greifen möchtest, freuen wir uns sehr über deine Spende auf folgendes Konto:
                 <Spacer height={16} />
              Förderverein der Unimusik Hamburg e.V.
              <br />
              DE39 8306 5408 0004 1718 96
              <br />
              GENODEF1SLR
              <br />
              Deutsche Skatbank
                  <Spacer height={16} />
              Oder nutze diesen <strong><a href="https://www.paypal.com/donate/?hosted_button_id=RMNEQFSCL48SQ" target="_blank">Paypal Link&#10154;</a></strong>.
    <Spacer height={16} />
              Eine Spendenbescheinigung können wir auf Wunsch ausstellen. Bitte kontaktiere uns dafür unter:
              <a href="mailto:info@foerderverein-unimusik-hamburg.de?subject=Spendenbescheinigung%20Sternstunden" title="Spendenbescheinigung">
                <strong> info@foerderverein-unimusik-hamburg.de </strong>
              </a>
              mit dem Betreff <strong> “Spendenbescheinigung Sternstunden”</strong>.<br />
            </div>
          }
          isOpen={currOpen === 1}
          handleClick={() => toggleOpen(1)}
        />
        <CollapsibleText
          title="MITHELFEN"
          text={
            <div>
              <h3>Hilf uns beim Festival!</h3>

                <p> Vom <strong> 17.–18. Juli </strong> findet auf dem Gelände der Hamburger Sternwarte wieder das Sternstunden-Festival statt. Euch erwarten Live-Musik, Science Slams, Führungen durch die Sternwarte, Himmelsbeobachtung, Mitmachangebote und viele weitere Programmpunkte für Groß und Klein.
                    <br />

                Damit das Festival gelingt, suchen wir noch helfende Hände. Ob ihr ohnehin Teil der Sternstunden-Community seid, das Festival unterstützen möchtet oder direkt in der Nachbarschaft wohnt und ein paar Stunden Zeit habt – wir freuen uns über jede Unterstützung! <br />
                Besonders schön: Wer in der Nähe wohnt, kann auch ganz unkompliziert kurze Schichten an Auf- und Abbau übernehmen. Natürlich sind aber ebenso längere Einsätze willkommen.  <br />Unterstützung wird unter anderem beim Einlass, an Infopunkten, bei Auf- und Abbau sowie an verschiedenen Stationen auf dem Gelände benötigt.
                Für Helfende gibt es je nach Umfang des Einsatzes freien Eintritt, Verpflegung und weitere kleine Goodies.
                Wenn ihr Lust habt, Teil der Sternstunden zu werden und einen Blick hinter die Kulissen zu werfen, meldet euch einfach über diesen

                <a href="https://helfer.uhhmusik.de/login" target="_blank" title="Google Dokument">
                    <strong> Link.</strong>
                </a> Nach der Registrierung könnt ihr die passende Schicht für euch wählen.  <br />
                <br /></p>

               <strong> Wir freuen uns auf ein tolles Festival mit euch und danken euch schon jetzt für eure Unterstützung!</strong>

            </div>
          }
          isOpen={currOpen === 2}
          handleClick={() => toggleOpen(2)}
        />
        
      </div>
      <br />
    </div>
  );
};
export default Faqs;
