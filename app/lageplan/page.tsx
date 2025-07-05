// import Flex from "@/components/Flex";
import "../../styles/common.css";
import "../../styles/boring-pages.css";
import "../../styles/home.css";
import Image from "next/image";
import Zoomable from "@/components/Zoomable";

const Lageplan = () => {
    return (

     <div className="content-box">
        <Zoomable title="Musikalisches Lineup 2025">
          <Image
            src="/lageplan.jpg"
            alt="Lageplan Sternstunden Festival 18. & 19. Juli"
            width="1240"
            height="877"
            className="hom-image"
          />
        </Zoomable>
      </div>

    );
};
export default Lageplan;