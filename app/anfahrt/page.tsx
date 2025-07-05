// import Flex from "@/components/Flex";
import "../../styles/common.css";
import "../../styles/boring-pages.css";
import "../../styles/home.css";
import Spacer from "@/components/Spacer";
import Image from "next/image";
import Zoomable from "@/components/Zoomable";


const Anfahrt = () => {
  return (
    <div className="boring-page-wrapper">
      <h1>Anfahrt</h1>

     <div className="content-box">
        <Zoomable title="Anfahrt">
          <Image
            src="/anfahrt.jpg"
            alt="Anfahrt Sternstunden Festival"
            width="700"
            height="471"
            className="hom-image"
          />
        </Zoomable>
      </div>


      <p>
        Das Gelände der Sternwarte erreicht ihr am besten vom Bahnhof Bergedorf mit dem Bus oder mit dem Fahrrad.
        <Spacer height={16} />
        Da sich um das Gelände der Sternwarte vor allem Wohnhäuser befinden und es keine öffentlichen Parkplätze gibt, möchten wir euch von der
        Anreise mit dem Privat-PKW abraten. 
        <Spacer height={16} />
        <a
          href="https://www.google.de/maps/dir//53.4800348,10.2380765/@53.4800284,10.2382381,199m/data=!3m1!1e3!4m2!4m1!3e0?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
        >
          <strong> Anfahrt mit Google Maps planen &#10154;</strong>
        </a>
      </p>
              <Spacer height={16} />

  <div>
      <h3>Hinweis!</h3>
         <h2>🛠️ Straßensperrung Justus-Brinckmann-Straße</h2>

         <div className="content-box">
        <Zoomable title="Anfahrt">
          <Image
            src="/anfahrt-02.jpg"
            alt="Anfahrt Sternstunden Festival"
            width="700"
            height="471"
            className="hom-image"
          />
        </Zoomable>
      </div>

 
      <p>Im Zeitraum vom 7. bis 27. Juli 2025 wird die Fahrbahn (Justus-Brinckmann-Str.) zwischen der Einmündung Holtenklinker Straße und dem Kreuzungsbereich Gojenbergsweg vollständig erneuert.</p>
      <ul>
        <li>➡️ Die Durchfahrt ist in diesem Abschnitt <strong>nicht</strong> möglich.</li>
        <li>➡️ Fuß-/Radwege bleiben jedoch weiterhin nutzbar.</li>
        <li>Umleitung für Kfz-Verkehr über: Wentorfer Straße → Mohnhof → Holtenklinker Straße (B5)</li>
        <li>Zusätzliches Umleitungsschild aus Richtung Krankenhaus</li>
      </ul>
    </div>

<div>
      <div>
      <h3>🚌 Anreise mit dem ÖPNV</h3>
      <ul>
        <li>Buslinien 332 und 135 (Haltestelle Sternwarte Besucherzentrum) fahren nur alle 30 Minuten</li>
        <li><strong>Alternative:</strong> Linien 8890 und 228 alle 10 Minuten bis Haltestelle Holtenklinke</li>
        → Treppe und Fußweg zur Sternwarte von dort<br/>
        → recht steiler Weg
      </ul>

    <div>
      <h3>🚶‍♀️ Zu Fuß und mit dem Fahrrad</h3>
      <ul>
        <li>Fuß- und Radwege sind nicht von der Sperrung betroffen</li>
        → problemlose Erreichbarkeit zu Fuß oder per Rad<br/>
        → Wegweiser-Plakate an wichtigen Abzweigungen helfen bei der Orientierung
      </ul>
    </div>

    </div>

      <h3>🚗 Anfahrt mit dem Auto</h3>
      <ul>
        <li>Zufahrt zur Sternwarte nur über Wentorfer Straße</li>
        → in die Justus-Brinckmann-Straße und dann August-Bebel-Straße<br/>
        → direkte Zufahrt über Holtenklinker Straße nicht möglich<br/>
        → Rückfahrt über August-Bebel-Straße zur Holtenklinker Straße erlaubt
        <li><strong>Parken:</strong> Bitte weiträumig in der Umgebung – keine Parkplätze direkt am Gelände</li>
      </ul>
    </div>

    <div>
      <h3>🛴 E-Scooter</h3>
      <ul>
        <li>Voi und Dott wurden über den Bedarf informiert</li>
      </ul>
    </div>

    <div>
      <strong>Unsere Empfehlung:</strong> Kommt am besten mit dem Fahrrad, zu Fuß oder mit den Linienbussen 8890 / 228 oder  332 / 135 – so seid ihr entspannt und klimafreundlich unterwegs.
      <br/><br/>
      Bei Fragen zur Anreise meldet euch gerne bei uns!
        <Spacer height={16} />

    </div>


    </div>


  );
};
export default Anfahrt;
