// import Flex from "@/components/Flex";
import "../../styles/common.css";
import "../../styles/boring-pages.css";
import Spacer from "@/components/Spacer";


const Anfahrt = () => {
  return (
    <div className="boring-page-wrapper">
      <h1>Anfahrt</h1>

      <p>
        Das Gelände der Sternwarte erreicht ihr am besten vom Bahnhof Bergedorf mit dem Bus der Linie 332 zur Haltestelle Sternwarte
        (Universität).
        <Spacer height={16} />
        Alternativ könnt ihr auch mit der Linie 135 bis zur Station Justus-Brinckmann-Straße oder mit der 8890 zur Station Holtenklinke. Von dort sind
        es dann nur noch jeweils 6 bis 10 Minuten zu Fuß.
        <Spacer height={16} />
        Da sich um das Gelände der Sternwarte vor allem Wohnhäuser befinden und es keine öffentlichen Parkplätze gibt, möchten wir euch von der
        Anreise mit dem Privat-PKW abraten und empfehlen die klimafreundliche Anreise mit den öffentlichen Verkehrsmitteln.
        <Spacer height={16} />
        <a href="https://www.google.de/maps/dir//53.4800348,10.2380765/@53.4800284,10.2382381,199m/data=!3m1!1e3!4m2!4m1!3e0?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" target="_blank"><strong> Anfahrt mit Google Maps planen &#10154;</strong></a>
      </p>
     <img
                   src="/anfahrt.jpg"
                   width="100%" 
                   height="auto"
                   alt="Anfahrt Sternstunden Festival"

                 />
    </div>
    
  );
};
export default Anfahrt;
