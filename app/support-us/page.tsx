"use client";
import "../../styles/common.css";
import "../../styles/boring-pages.css";
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
              </a>
              .
              <br />
              <br />
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
              <br />
              <br />
              Förderverein der Unimusik Hamburg e.V.
              <br />
              DE39 8306 5408 0004 1718 96
              <br />
              GENODEF1SLR
              <br />
              Deutsche Skatbank
              <br />
              <br />
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
              Wir möchten unsere Verbindung zu unseren Nachbar:innen stärken. Hast du Lust uns zu unterstützen und dich für ein Projekt in deiner
              Nachbarschaft einzusetzen? Sprich uns gerne an!
              <br />
              <br />
              Wenn ihr Lust habt, uns <strong> </strong> , beim <strong>Auf- und Abbau</strong> oder an den <strong>Festivaltagen selbst</strong> zu
              unterstützen, freuen wir uns sehr über eure Hilfe! Meldet euch einfach über dieses{" "}
              <a href="https://forms.cloud.microsoft/r/Ts38UzQxBk?origin=lprLink" target="_blank" title="Google Dokument">
                <strong> Google Dokument &#10154;</strong>
                </a>

              <br />
              <br />
              Ein paar Beispiele, wie ihr euch einbringen könnt:
              <br />
              <ul>
                <li>Flyer verteilen & Plakate aufhängen</li>
                <li>Auf- und Abbau vor Ort</li>
                <li>Snacks & Gerichte für Künstler:innen und Helfer:innen vorbereiten</li>
                <li>...und vieles mehr! </li>
              </ul>
              <br />
              <strong> Gemeinsam wird’s am schönsten – danke für euren Support! 💛 </strong>
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
