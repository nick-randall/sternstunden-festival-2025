import "../../styles/grid-gallery.css";
import "../../styles/common.css";
import Image from "next/image";
import Spacer from "@/components/Spacer";
// interface ImpressionsPageProps {

//   photoUrls: string[];

// }
const rootUrl25 = "https://sternstunde.s3.ap-southeast-2.amazonaws.com/2025_photos/";


const urls25 = ["ssf25m001", "ssf25m002", "ssf25m003", "ssf25m004", "ssf25m005", "ssf25m006", "ssf25m007", "ssf25m008", "ssf25m009", "ssf25m010", "ssf25m011", "ssf25m012", "ssf25m013", "ssf25m014",
    "ssf25m015", "ssf25m016", "ssf25m017", "ssf25m018", "ssf25m019", "ssf25m020", "ssf25m021", "ssf25m022", "ssf25m023", "ssf25m024", "ssf25m025", "ssf25m026", "ssf25m027", "ssf25m028", "ssf25m029", "ssf25m030", "ssf25m031"
].map(url => `${rootUrl25}${url}.jpg`);

const ImpressionsPage: React.FC = () => {
  for (let i = 0; i < urls25.length; i++) {
    console.log(i, urls25[i]);
  }
  return (
    <div>
      <div className="boring-page-wrapper">
        <h1>Impressionen 25</h1>
      </div>
      <div className="left-small-right-large-grid photo-grid">
        <Image src={urls25[4]} alt="Impression Sternstunden Festival 2024" height="300" width="200" />
        <Image src={urls25[18]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
        <Image className="two-wide" src={urls25[29]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
      </div>
      <Spacer height={5} />

      <div className="left-large-right-small-grid photo-grid">
        <Image src={urls25[5]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
        <Image src={urls25[6]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
      </div>
      <Spacer height={5} />
        <div className="left-small-right-large-grid photo-grid">
        <Image src={urls25[12]} alt="Impression Sternstunden Festival 2024" height="300" width="200" />
        <Image src={urls25[2]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
        </div>
        <Spacer height={5} />
      <div className="two-small-one-large-grid photo-grid">
        <Image src={urls25[7]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
        <Image src={urls25[8]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
        <Image src={urls25[9]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
        <Image src={urls25[10]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
        <Image src={urls25[11]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
        <Image src={urls25[0]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
      </div>
      <Spacer height={5} />
        <div className="left-large-right-small-grid photo-grid">
        <Image src={urls25[13]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
        <Image src={urls25[14]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
        <Image src={urls25[5]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
        <Image src={urls25[16]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
        </div>
        <Spacer height={5} />
        <div className="left-small-right-large-grid photo-grid">
        <Image src={urls25[17]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
        <Image src={urls25[18]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
      </div>
      <Spacer height={5} />
      <div className="left-small-right-large-grid photo-grid">
        <Image src={urls25[19]} alt="Impression Sternstunden Festival 2024" height="300" width="200" />
        <Image src={urls25[15]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
        <Image className="two-wide" src={urls25[21]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
      </div>
      <Spacer height={5} />
      <div className="left-large-right-small-grid photo-grid">
        <Image src={urls25[24]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
        <Image src={urls25[23]} alt="Impression Sternstunden Festival 2024" height="300" width="200" />
      </div>
      <Spacer height={5} />
      <div className="one-wide">
        <Image src={urls25[22]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
      </div>
      <div className="left-large-right-small-grid photo-grid">
        <Image src={urls25[28]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
        <Image src={urls25[30]} alt="Impression Sternstunden Festival 2024" height="300" width="200" />
      </div>

      <Spacer height={5} />
      <div className="three-even-grid photo-grid">
        <Image src={urls25[27]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
        <Image src={urls25[26]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
        <Image src={urls25[1]} alt="Impression Sternstunden Festival 2024" height="400" width="600" />
      </div>

      <Spacer height={5} />
    </div>
  );
};

export default ImpressionsPage;
