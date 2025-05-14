// import Flex from "@/components/Flex";
import "../../styles/common.css";
import "../../styles/boring-pages.css";
import Spacer from "@/components/Spacer";

const MissionStatement = () => {
    return (
        <div className="boring-page-wrapper">
            <h1>Mission Statement</h1>
            <p>Wir verstehen uns als spartenübergreifendes Kulturfestival, mit dem wir eine Brücke insbesondere zwischen
            unterschiedlichen Musikgenres und Astrophysik schlagen möchten.
            So sollen Ideen und Gedanken miteinander verknüpft und präsentiert werden. Ungehörtes, Ungesehenes erlaubt uns,
            die Welt aus neuen Perspektiven zu betrachten, Gedankenexperimente zu wagen.
            Wir wollen Gemeinschaften stärken, kulturelle Barrieren überwinden und ein bereicherndes Erlebnis im Hier und Jetzt für alle schaffen.
            Willkommen auf dem Sternstunden Festival, wir laden euch ein, die faszinierenden Welten von Musik und Astrophysik mit uns zu entdecken.
            </p>
           <Spacer height={16} />

             <h2>REGELN</h2>
            <p>
            Keine Hunde! <br/>
            Kein offenes Feuer oder Grillen!<br/>
            Kein Konfetti!<br/>
            Diskriminierung aller Art, insbesondere aufgrund von Geschlecht, sexueller Orientierung oder Herkunft hat keinen Platz auf dem Sternstunden Festival. <br/>
            Respektiert euch gegenseitig, seid freundlich und einvernehmlich. <br/>
            Sprecht uns an, wenn ihr Hilfe braucht.
            </p>
    
        </div>

       
               
    );
};
export default MissionStatement;
