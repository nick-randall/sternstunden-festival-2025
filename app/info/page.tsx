

// import Flex from "@/components/Flex";
import "../../styles/common.css";
import "../../styles/boring-pages.css";
import Spacer from "@/components/Spacer";

import Link from "next/link";


const MoreInfoPage = () => {
  return (
    <div className="boring-page-wrapper">
      <title>INFO | Sternstunden Festival</title>
      <meta
        name="description"
        content="Das Sternstunden Festival vereint inspirierende Konzerterlebnisse in besonderer Umgebung mit spannenden astrophysikalischen Einblicken unter Hamburgs Sternenhimmel in einzigartiger Festivalatmosphäre."
      />
      <meta name="twitter:image" content="/site-preview.jpg" />
      <meta name="twitter:title" content="Info | Sternstunden Festival" />
      <meta
        name="twitter:description"
        content="Das Sternstunden Festival vereint inspirierende Konzerterlebnisse in besonderer Umgebung mit spannenden astrophysikalischen Einblicken unter Hamburgs Sternenhimmel in einzigartiger Festivalatmosphäre."
      />
      <h1>Das Sternstunden Festival</h1>
      <h3>Musik trifft Kosmos</h3>
      <p>
        <strong>
          Klangvolle Nächte unter dem Sternenzelt, faszinierende Einblicke in die Weiten des Universums und ein Ort voller Geschichte – Willkommen auf
          dem Sternstunden Festival!
        </strong>
        <br />
        Seit seiner Premiere im Sommer 2023 lädt das Festival jährlich im Juli auf das Gelände der historischen 
        <strong> Hamburger Sternwarte in Bergedorf</strong> ein. <strong>Freitags ab dem Nachmittag und samstags ab dem Mittag</strong> verwandelt sich
        die weitläufige Parkanlage rund um die denkmalgeschützten Teleskopgebäude in einen Ort der Begegnung mit Musik und Astronomie.
        <Spacer height={16} />
      </p>
      <h3>Ein Festival zwischen Kosmos und Klang</h3>

      <p>
        Das Sternstunden Festival schlägt Brücken – zwischen Genres, Generationen und Galaxien.
        Im Fokus steht einerseits die musikalische Vielfalt, die von <strong>klassischer Kammermusik</strong> über
        <strong> gregorianische Gesänge</strong>, <strong>Jazz</strong> bis hin zu <strong>Elektro-Pop</strong> reicht. Dabei wird das Festival
        maßgeblich von <strong>Künstler:innen aus den Chören und dem Sinfonieorchester der Universität Hamburg</strong> sowie
        <strong> Musikschaffenden aus der Region</strong> gestaltet. In den vergangenen Jahren begeisterten unter anderem das
        <strong> Orchester im Treppenhaus</strong> oder das energetische Ensemble <strong>Hepta Polka</strong> das Publikum.
        <br />
        Doch das Festival geht über Musik hinaus: Es möchte Wissenschaft nahbar machen, Astronomie erlebbar gestalten – und das in einem ganz
        besonderen Rahmen. Im <strong>wissenschaftlichen Programm</strong> erwarten die Besucher:innen:
        <ul>
          <li>
            <strong>Führungen durch die historischen Kuppelgebäude</strong>
          </li>
          <li>
            <strong>ein Blick durch Teleskope des letzten Jahrhunderts</strong> (bei entsprechendem Wetter und klarem Himmel)
          </li>
          <li>
            <strong>Experimente zum Mitmachen</strong>
          </li>
          <li>
            <strong>Vorträge</strong> zu aktuellen Forschungsthemen, zur Geschichte des Universums und spannenden Fragen der modernen Astrophysik
          </li>
          <li>
            <strong>und vieles mehr</strong>
          </li>
        </ul>
        👉 <Link href="/timetable">
      <strong>[Zum Timetable]</strong>
        </Link> 
        <br/>
 👉     <Link href="/kuenstlerinnen">
      <strong>[Zum Programm]</strong>
        </Link> 
        <Spacer height={4} />
      </p>
      <h3>Für alle Generationen</h3>
      <p>
        Das Sternstunden Festival versteht sich als<strong> Ort für alle – von jung bis alt</strong>. Mit einem eigenen
        <strong> Kinderprogramm</strong> wird auch der jüngste Nachwuchs auf galaktische Reisen geschickt: Ob beim <strong>Kinderkonzert</strong>,einer
        <strong> Kinderführung</strong> durch die Sternwarte, auf dem <strong>musikalischen Planetenrundgang</strong> oder bei der 
        <strong> Sternstunden-Rallye</strong> – hier wird gestaunt, gelacht und entdeckt.
        <Spacer height={16} />
              </p>
      <h3>Kultur für alle </h3>
      <p>
        Um Kultur möglichst vielen Menschen zugänglich zu machen, legt das Festival großen Wert auf <strong>niedrigschwellige Preise</strong>. Es gibt
        die <strong>Tages- und Kombitickets, ermäßigte Tickets</strong> sowie alle Infos und Buchungsmöglichkeiten im
        <Link href="/tickets">
          <strong> Ticketshop</strong>
        </Link>
        . Mit jeweils rund <strong>1.500 Besucher:innen in den ersten beiden Jahren</strong> hat sich das Festival hin zu einem neuen Fixpunkt im
        Hamburger Kulturkalender entwickelt – und begeistert ein buntes, vielfältiges Publikum.
        <Spacer height={16} />
              </p>
      <h3>Ort mit Geschichte und Atmosphäre</h3>
      <p>
        Die Hamburger Sternwarte öffnete ihre Tore zu Beginn des 20. Jahrhunderts und zählt zu den besonderen historischen Orten in Hamburg. Ihre
        imposanten Gebäude stehen unter Denkmalschutz und verleihen dem Festival eine einzigartige Kulisse – umgeben von einer malerischen Parkanlage
        und einer besonderen Atmosphäre.
        <br />
        <Link href="/sternwarte">
          <strong>Mehr zur Geschichte der Sternwarte gibt es hier</strong>
        </Link>
        .
        <Spacer height={16} />
              </p>
      <h3>Von der Idee zur Sternstunde</h3>
      <p>
        Das Sternstunden Festival ist ein Herzensprojekt. Organisiert und getragen wird es <strong>ehrenamtlich</strong> von Studierenden und
        Engagierten aus der <strong>Unimusik Hamburg</strong>, der <strong>Hamburger Sternwarte</strong>. Hinter dem Festival steht der Wunsch,
        <strong> Wissenschaft und Musik zu verknüpfen</strong>, Raum für Begegnung zu schaffen und astronomische Themen
        <strong> in einem neuen Kontext </strong>erlebbar zu machen.
        <br />
    
        <h3>
          Schenk dir eine Sternstunde.
          <br />
          Im Juli, in Bergedorf, unter den Sternen.
        </h3>
      </p>
    </div>
  );
};

export default MoreInfoPage;
