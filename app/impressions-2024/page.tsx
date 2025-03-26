import "../../styles/grid-gallery.css";
import "../../styles/common.css";
import Image from "next/image";
// interface ImpressionsPageProps {

//   photoUrls: string[];

// }
const rootUrl = "https://sternstunde.s3.ap-southeast-2.amazonaws.com/2024_photos/";

const urls = ["ssf2486", "ssf24m43", "ssf24m45", "ssf24m56"].map((url) => `${rootUrl}${url}.jpg`);

const ImpressionsPage: React.FC = () => {
  // const landscape = "https://sternstunde.s3.ap-southeast-2.amazonaws.com/2024_photos/ssf24m43.jpg";
  // const portrait = "https://sternstunde.s3.ap-southeast-2.amazonaws.com/2024_photos/ssf2486.jpg";
  // const p = "https://sternstunde.s3.ap-southeast-2.amazonaws.com/2024_photos/ssf24m45.jpg";
  return (
    <div>
      <div className="title">Impressionen &apos;24</div>
      <div className="gallery-grid">
        <Image src={urls[0]} alt="" height="300" width="200"/>
        <Image src={urls[1]} alt="" height="400" width="600"/>
        <Image src={urls[2]} alt="" height="300" width="200"/>
        <Image src={urls[3]} alt="" height="400" width="600"/>

      </div>
    </div>
  );
};

export default ImpressionsPage;
