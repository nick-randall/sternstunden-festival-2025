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
      <div className="collapsible-text-boxes">
        <CollapsibleText
          title="Wie viel werden die Tickets an der Abendkasse kosten? "
          text={
                    <div>
                     Die Tickets werden für den Freitag 15€ (ermäßigt 10€) und für den Samstag 20€ (ermäßigt 14€) kosten.
                  Das Kombiticket kostet 25€ (ermäßigt 19€).
                  Ermäßigungsberechtigt sind Studierende, Senior*innen, Schüler*innen,
                  Auszubildende, Erwerbslose, Menschen mit Schwerbehinderung (ab GdB 50, bei eingetragenem Merkzeichen „B“ erhält Begleitung freien Eintritt).
                  Kinder bis 14 Jahre erhalten freien Eintritt und benötigen ein kostenloses Online-Ticket.
                  Geflüchtete erhalten freien Eintritt gegen  Vorlage einer gültigen Aufenthaltserlaubnis
                  nach § 24 AufenthG oder § 25 Abs. 1, 2 oder 3  AufenthG oder jeweils in Verbindung mit einer gültigen Fiktionsbescheinigung.
                  Für Geflüchtete aus der Ukraine gilt die Vorlage eines ukrainischen Reisepasses oder eines anderen Ausweisdokuments.
                  Bitte vorher ein kostenloses Online-Ticket bestellen. Tickets gibt es in unserem <a href="/tickets">
        <strong>Ticketshop</strong>
      </a>.
                   </div>
                  }
          isOpen={currOpen === 0}
          handleClick={() => toggleOpen(0)}
        />
        <CollapsibleText
          title="Wann beginnt das Festival jeweils an den beiden Tagen? "
          text="Am Freitag beginnt der Einlass um 16 Uhr und das Programm endet um 1 Uhr nachts.
                  Am Samstag geht es mit dem Einlass um 14 Uhr los und das Programm endet um Mitternacht,
                  je nach Witterungsverhältnissen geht die Himmelsbeobachtung vielleicht noch etwas länger."
          isOpen={currOpen === 1}
          handleClick={() => toggleOpen(1)}
        />
        <CollapsibleText
          title="Kann man auf dem Festivalgelände übernachten?"
          text="Nein, dafür gibt es leider keine Strukturen. Aber das Programm und alles drum herum sind die Anreise an beiden Tagen trotzdem wert."
          isOpen={currOpen === 2}
          handleClick={() => toggleOpen(2)}
        />
        <CollapsibleText
          title="Wird man durch die Teleskope sehen können?"
          text=" Ja, durch ein oder zwei der Teleskope wird man sehen können. Teilweise werden diese aber noch für Forschung und Lehre verwendet, daher sind
        nicht alle Teleskope und ihre Kuppelgebäude für Besucher:innen zugänglich. Außerdem muss der Himmel klar genug ist, damit sich ein Blick lohnt."
          isOpen={currOpen === 3}
          handleClick={() => toggleOpen(3)}
        />
        <CollapsibleText
          title="Ist das Gelände barrierefrei?"
          text="Das Gelände selbst ist barrierefrei, leider ist jedoch nicht alles auf dem Gelände barrierefrei.
                Die Gebäude sind von 1900 und haben teils einige Stufen, über die man in die Kuppeln gelangt. Jedoch gibt es zum Gelangen in die Bibliothek einen rollstuhlgerecheten Treppenlift."
          isOpen={currOpen === 4}
          handleClick={() => toggleOpen(4)}
        />
        <CollapsibleText
          title="Kann ich dort gut parken?"
          text="Nein, einen öffentlichen Parkplatz gibt es nicht und da sich um das Gelände herum ein Wohngebiet befindet,
                ist das Parkplatzangebot sehr eingeschränkt. Wir schlagen für PKW-Reisende das Park & Ride-Angebot am Bahnhof Bergedorf und die Fahrt von dort mit dem Bus zur Sternwarte vor,
                Details findest du unter Anfahrt"
          isOpen={currOpen === 5}
          handleClick={() => toggleOpen(5)}
        />
        <CollapsibleText
          title="Gibt es auf dem Festival Essen und Getränke?"
          text="Ja, es wird ein Angebot an Speisen und Getränken geben."
          isOpen={currOpen === 6}
          handleClick={() => toggleOpen(6)}
        />
        <CollapsibleText
          title="Kann ich auf dem Festival überall bargeldlos bezahlen?"
          text="Es wird die Möglichkeit zum kontaktlosen Bezahlen geben, jedoch nicht überall.
                Vor allem beim Essensangebot ist Bargeld nötig. Bringt also genug mit, damit ihr nicht auf einen leckeren Snack oder ein erfrischendes Getränk verzichten müsst."
          isOpen={currOpen === 7}
          handleClick={() => toggleOpen(7)}
        />
        <CollapsibleText
          title="Kann ich mein Getränk mit zu den einzelnen Konzerten und Beiträgen nehmen?"
          text="Bei einem Konzert auf der Außenbühne ist das kein Problem, es dürfen aber keine Speisen oder Getränke mit in die Innenräume der
                Sternwartengebäude genommen werden. Das gilt dann auch für die Konzerte im Großen Refraktor, dem OLT und der Bibliothek."
          isOpen={currOpen === 8}
          handleClick={() => toggleOpen(8)}
        />
        <CollapsibleText
          title="Sind Hunde auf dem Gelände erlaubt?"
          text="Hunde dürfen leider nicht auf das Gelände der Sternwarte. Ausgenommen davon sind natürlich Blindenführhunde und Hunde in ihrer Funktion als
                Begleit-Hund."
          isOpen={currOpen === 9}
          handleClick={() => toggleOpen(9)}
        />
        <CollapsibleText
          title="Bienen auf dem Gelände der Sternwarte"
          text={
            <div>
              Im Astronomiepark der Sternwarte Bergedorf wurden über das Jahr 2023 verschiedene Maßnahmen zur Förderung heimischer Wildbienenarten
              umgesetzt. Es wurden Blühwiesen und Beete mit heimischen Wildsträuchern und Wildstauden als Nektar- und Pollenquellen für die Wildbienen
              angelegt.
              <br />
              <br />
              <strong>Was muss ich beachten, wenn ich eine Bienenallergie habe?</strong>
              <br />
              Bitte bring im Falle einer bekannten Allergie dein Notfallset mit und halte ausreichend Abstand zu den Bienenstöcken. Im Zweifelsfall
              informiere unser Team vor Ort.
              <br />
              <br />
              <strong>Kann ich barfuß über das Gelände laufen?</strong>
              <br />
              Aus Sicherheitsgründen raten wir dringend davon ab, barfuß zu laufen – es besteht die Gefahr, versehentlich auf eine Biene zu treten.
            </div>
          }
          isOpen={currOpen === 10}
          handleClick={() => toggleOpen(10)}
        />
        <CollapsibleText
          title="Gibt es vor Ort eine Erste-Hilfe-Station?"
          text= {
            <div>
             Ja, es gibt ein Erste-Hilfe-Zelt auf dem Gelände. Du findest es gut sichtbar ausgeschildert in der Nähe der Toiletten. Im Notfall wende dich
             bitte an das Personal – wir helfen dir sofort weiter. In unserem <a href="/lageplan"><strong>Lageplan</strong></a> ist es auch eingezeichnet.
           </div>
          }
          isOpen={currOpen === 11}
          handleClick={() => toggleOpen(11)}
        />
        <CollapsibleText
          title="Welchen Eingang soll ich benutzen?"
          text={
            <div>
             Bitte benutze ausschließlich den Haupteingang der Sternwarte, wie er auch auf dem <a href="/lageplan"><strong>Lageplan</strong></a>  gekennzeichnet ist.
             Der Eingang von der August-Bebel-Straße kommend wird nur als Notausgang genutzt.
           </div>
          }
          isOpen={currOpen === 12}
          handleClick={() => toggleOpen(12)}
        />
        <CollapsibleText
          title="Wie geht das Sternstunden Festival mit Awareness um?"
          text="Uns ist ein respektvolles und achtsames Miteinander wichtig. Wenn du dich unwohl fühlst oder Unterstützung brauchst, kannst du dich jederzeit
                an unser Awareness-Team wenden (in den lila Westen). Wir nehmen eure Anliegen ernst und setzen uns für einen sicheren Raum für alle ein. Auch
                wenn es dir schlecht geht, kannst du dich an unser Awareness Team wenden."
          isOpen={currOpen === 13}
          handleClick={() => toggleOpen(13)}
        />
        <CollapsibleText
          title="Kann ich auf dem Gelände grillen?"
          text="Nein, von Feuerstellen jeglicher Art ist abzusehen. Da das Gelände viel aus Rasenfläche besteht und die im Juli sehr trocken sein kann,
                bitten wir euch mit allem, was das Gras entzünden könnte, sehr vorsichtig zu sein. Das gilt dann auch für das Rauchen. Bitte achtet darauf,
                keine glühende Asche in trockenes Gras fallen zu lassen. Gegrilltes wird aber vom ansässigen Café angeboten."
          isOpen={currOpen === 14}
          handleClick={() => toggleOpen(14)}
        />
      </div>
      <br />
      <br />
      Hast du noch mehr Fragen? Dann nutze unser{" "}
      <a href="../kontakt">
        <strong>Kontaktformular</strong>
      </a>{" "}
      oder besuche uns auf{" "}
      <a href="https://www.instagram.com/sternstundenfestival/">
        <strong>Instagram</strong>
      </a>
      .
    </div>
  );
};
export default Faqs;
