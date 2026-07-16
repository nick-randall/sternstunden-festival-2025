// import Flex from "@/components/Flex";
import "../../styles/common.css";
import "../../styles/boring-pages.css";
import "../../styles/home.css";
import Image from "next/image";
import Zoomable from "@/components/Zoomable";

const Lageplan = () => {
    return (

     <div className="content-box">
        <Zoomable title="Lageplan Sternstunden Festival 17. & 18. Juli">
          <Image
            src="/lageplan.png"
            alt="Lageplan Sternstunden Festival 17. & 18. Juli"
            width="1240"
            height="877"
            className="hom-image"
          />
        </Zoomable>
      </div>

    );
};
export default Lageplan;