import "../../styles/grid-gallery.css";
import "../../styles/common.css";
import Image from "next/image";
import Spacer from "@/components/Spacer";
// interface ImpressionsPageProps {

//   photoUrls: string[];

// }
const rootUrl = "https://sternstunde.s3.ap-southeast-2.amazonaws.com/2024_photos/";

// const urls = ["ssf2486", "ssf24m43", "ssf24m45", "ssf24m56"].map((url) => `${rootUrl}${url}.jpg`);

const urls = [
  "ssf2486",
  "ssf24m43",
  "ssf24m45",
  "ssf24m56",
  "ssf2485",
  "ssf2443",
  "ssf2482",
  "ssf2479",
  "ssf2471",
  "ssf24m13",
  "ssf2470",
  "ssf2462",
  "ssf2458",
  "ssf24m96",
  "ssf2451",
  "ssf2449",
  "ssf2446",
  "ssf2442",
  "ssf2441",
  "ssf2437",
  "ssf24m25",
  "ssf2438",
  "ssf2434",
  "ssf2464",
  "ssf2481",
].map(url => `${rootUrl}${url}.jpg`);

const ImpressionsPage: React.FC = () => {
  for(let i = 0; i < urls.length; i++) {
    console.log(i, urls[i]);
  }
  // const landscape = "https://sternstunde.s3.ap-southeast-2.amazonaws.com/2024_photos/ssf24m43.jpg";
  // const portrait = "https://sternstunde.s3.ap-southeast-2.amazonaws.com/2024_photos/ssf2486.jpg";
  // const p = "https://sternstunde.s3.ap-southeast-2.amazonaws.com/2024_photos/ssf24m45.jpg";
  return (
    <div>
      <div className="title">Impressionen &apos;24</div>
      <div className="left-small-right-large-grid">
        <Image src={urls[0]} alt="" height="300" width="200" />
        <Image src={urls[1]} alt="" height="400" width="600" />
        <Image src={urls[2]} alt="" height="300" width="200" />
        <Image src={urls[3]} alt="" height="400" width="600" />
        <Image className="two-wide" src={urls[4]} alt="" height="400" width="600" />
      </div>
      <Spacer height={5} />

      <div className="left-large-right-small-grid">
        <Image src={urls[5]} alt="" height="400" width="600" />
        <Image src={urls[6]} alt="" height="400" width="600" />
      </div>
      <Spacer height={5} />

      <div className="two-small-one-large-grid">
        <Image src={urls[7]} alt="" height="400" width="600" />
        <Image src={urls[8]} alt="" height="400" width="600" />
        <Image src={urls[9]} alt="" height="400" width="600" />
        <Image src={urls[10]} alt="" height="400" width="600" />
        <Image src={urls[11]} alt="" height="400" width="600" />
        <Image src={urls[12]} alt="" height="400" width="600" />
      </div>
      <Spacer height={5} />
      <div className="three-even-grid">
        <Image src={urls[13]} alt="" height="400" width="600" />
        <Image src={urls[14]} alt="" height="400" width="600" />
        <Image src={urls[15]} alt="" height="400" width="600" />
        <Image src={urls[16]} alt="" height="400" width="600" />
        <Image src={urls[17]} alt="" height="400" width="600" />
        <Image src={urls[18]} alt="" height="400" width="600" />
      </div>
      <Spacer height={5} />
      <div className="left-small-right-large-grid">
        <Image src={urls[19]} alt="" height="300" width="200" />
        <Image src={urls[20]} alt="" height="400" width="600" />
        <Image className="two-wide" src={urls[21]} alt="" height="400" width="600" />
      </div>
      <Spacer height={5} />
      <div className="left-large-right-small-grid">
        <Image src={urls[22]} alt="" height="400" width="600" />
        <Image src={urls[23]} alt="" height="300" width="200" />
        <Image src={urls[24]} alt="" height="400" width="600" />
        <Image src={urls[25]} alt="" height="300" width="200" />
        <Image src={urls[26]} alt="" height="300" width="200" />

      </div>
    </div>
  );
};

export default ImpressionsPage;
