import "../../styles/grid-gallery.css";
import "../../styles/common.css";
import Image from "next/image";
import Spacer from "@/components/Spacer";
// interface ImpressionsPageProps {

//   photoUrls: string[];

// }
const rootUrl24 = "https://sternstunde.s3.ap-southeast-2.amazonaws.com/2024_photos/";
const rootUrl23 = "https://sternstunde.s3.ap-southeast-2.amazonaws.com/"
// const urls = ["ssf2486", "ssf24m43", "ssf24m45", "ssf24m56"].map((url) => `${rootUrl}${url}.jpg`);
// bilder von ssfm1 bis ssfm114 und ssf86
const urls24 = [
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
  "ssf2482",
  "ssf24m83",
  "ssf2447",
  "ssf24m33",
  "ssf2439",
  "ssf24m1",
  "ssf24m22",
  "ssf24m9",
  "ssf24m113",
  "ssf249",

].map(url => `${rootUrl24}${url}.jpg`);

const urls23 = [
    "2023-07-21_sternstunden_festival_FB_0001",
    "2023-07-21_sternstunden_festival_FB_0003",
    "2023-07-21_sternstunden_festival_FB_0006_edited",
    "2023-07-21_sternstunden_festival_FB_0009",
    "2023-07-21_sternstunden_festival_FB_0020",
    "2023-07-21_sternstunden_festival_FB_0022",
    "2023-07-21_sternstunden_festival_FB_0027",
    "2023-07-21_sternstunden_festival_FB_0029",
    "2023-07-21_sternstunden_festival_FB_0031",
    "2023-07-21_sternstunden_festival_FB_0032",
    "2023-07-21_sternstunden_festival_FB_0033_edited",
    "2023-07-22_sternstunden_festival_FB_0044",
    "2023-07-22_sternstunden_festival_FB_0045",
    "2023-07-22_sternstunden_festival_FB_0048_edited",
    "2023-07-22_sternstunden_festival_FB_0059",
    "2023-07-22_sternstunden_festival_FB_0097",
    "2023-07-22_sternstunden_festival_FB_0119",
    "2023-07-22_sternstunden_festival_FB_0127",

].map(url=> `${rootUrl23}${url}.jpg`);

const ImpressionsPage: React.FC = () => {
  for(let i = 0; i < urls24.length; i++) {
    console.log(i, urls24[i]);
  }
  // const landscape = "https://sternstunde.s3.ap-southeast-2.amazonaws.com/2024_photos/ssf24m43.jpg";
  // const portrait = "https://sternstunde.s3.ap-southeast-2.amazonaws.com/2024_photos/ssf2486.jpg";
  // const p = "https://sternstunde.s3.ap-southeast-2.amazonaws.com/2024_photos/ssf24m45.jpg";
  return (
    <div>
      <div className="title">Impressionen &apos;24</div>
      <div className="left-small-right-large-grid">
        <Image src={urls24[0]} alt="" height="300" width="200" />
        <Image src={urls24[1]} alt="" height="400" width="600" />
        <Image src={urls24[2]} alt="" height="300" width="200" />
        <Image src={urls24[3]} alt="" height="400" width="600" />
        <Image className="two-wide" src={urls24[4]} alt="" height="400" width="600" />
      </div>
      <Spacer height={5} />

      <div className="left-large-right-small-grid">
        <Image src={urls24[5]} alt="" height="400" width="600" />
        <Image src={urls24[6]} alt="" height="400" width="600" />
      </div>
      <Spacer height={5} />

      <div className="two-small-one-large-grid">
        <Image src={urls24[7]} alt="" height="400" width="600" />
        <Image src={urls24[8]} alt="" height="400" width="600" />
        <Image src={urls24[9]} alt="" height="400" width="600" />
        <Image src={urls24[10]} alt="" height="400" width="600" />
        <Image src={urls24[11]} alt="" height="400" width="600" />
        <Image src={urls24[12]} alt="" height="400" width="600" />
      </div>
      <Spacer height={5} />
      <div className="three-even-grid">
        <Image src={urls24[13]} alt="" height="400" width="600" />
        <Image src={urls24[14]} alt="" height="400" width="600" />
        <Image src={urls24[15]} alt="" height="400" width="600" />
        <Image src={urls24[16]} alt="" height="400" width="600" />
        <Image src={urls24[17]} alt="" height="400" width="600" />
        <Image src={urls24[18]} alt="" height="400" width="600" />
      </div>
      <Spacer height={5} />
      <div className="left-small-right-large-grid">
        <Image src={urls24[19]} alt="" height="300" width="200" />
        <Image src={urls24[20]} alt="" height="400" width="600" />
        <Image className="two-wide" src={urls24[21]} alt="" height="400" width="600" />
      </div>
      <Spacer height={5} />
      <div className="left-large-right-small-grid">
        <Image src={urls24[22]} alt="" height="400" width="600" />
        <Image src={urls24[23]} alt="" height="300" width="200" />
      </div>
        <Spacer height={5} />
        <div className="one-wide">
            <Image src={urls24[24]} alt="" height="400" width="600" />
        </div>
        <Spacer height={5} />
        <div className="left-large-right-small-grid">
            <Image src={urls24[28]} alt="" height="400" width="600" />
            <Image src={urls24[32]} alt="" height="300" width="200" />
        </div>

        <Spacer height={5} />
        <div className="three-even-grid">
            <Image src={urls24[27]} alt="" height="400" width="600" />
            <Image src={urls24[26]} alt="" height="400" width="600" />
            <Image src={urls24[29]} alt="" height="400" width="600" />
        </div>
        <Spacer height={5}/>
        <div className="left-large-right-small-grid">
            <Image src={urls24[30]} alt="" height="400" width="600" />
            <Image src={urls24[33]} alt="" height="400" width="600" />
        </div>
        <Spacer height={5} />
        <div className={"one-wide"}>
            <Image src={urls24[31]} alt="" height="400" width="600" />
        </div>
        <Spacer height={30} />
        <div className="title">Impressionen &apos;23</div>
        <Spacer height={5} />
        <div className={"one-wide"}>
            <Image src={urls23[14]} alt="" height="400" width="600" />
        </div>
        <Spacer height={5} />
        <div className="left-small-right-large-grid">
            <Image src={urls23[3]} alt="" height="600" width="400" />
            <Image src={urls23[2]} alt="" height="400" width="600" />
        </div>
        <Spacer height={5} />
        <div className="left-large-right-small-grid">
            <Image src={urls23[9]} alt="" height="400" width="600" />
            <Image src={urls23[10]} alt="" height="400" width="600" />
        </div>
        <Spacer height={5} />
        <div className="three-even-grid">
            <Image src={urls23[0]} alt="" height="400" width="600" />
            <Image src={urls23[5]} alt="" height="400" width="600" />
            <Image src={urls23[7]} alt="" height="400" width="600" />
        </div>
        <Spacer height={5} />
        <div className={"one-wide"}>
            <Image src={urls23[16]} alt="" height="400" width="600" />
        </div>
        <Spacer height={5} />
        <div className="left-large-right-small-grid">
            <Image src={urls23[12]} alt="" height="400" width="600" />
            <Image src={urls23[13]} alt="" height="300" width="200" />
            <Image src={urls23[6]} alt="" height="400" width="600" />
            <Image src={urls23[1]} alt="" height="600" width="400" />
        </div>
        <Spacer height={5} />
        <div className={"one-wide"}>
            <Image src={urls23[11]} alt="" height="400" width="600" />
        </div>
        <Spacer height={5} />
        <div className="left-large-right-small-grid">
            <Image src={urls23[15]} alt="" height="400" width="600" />
            <Image src={urls23[1]} alt="" height="400" width="600" />
        </div>
        <Spacer height={5} />
        <div className="two-small-one-large-grid">
        <Image src={urls23[4]} alt="" height="400" width="600" />
        <Image src={urls23[8]} alt="" height="400" width="600" />
        <Image src={urls23[17]} alt="" height="400" width="600" />
        </div>
    </div>

  );
};

export default ImpressionsPage;
