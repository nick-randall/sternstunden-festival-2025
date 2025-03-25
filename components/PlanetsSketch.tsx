"use client";

import { useEffect, useRef } from "react";
import p5 from "p5";

const Planets: React.FC = () => {
  "use client"; // Ensures it runs only on the client

  const sketchRef = useRef<HTMLDivElement>(null);
  const planetUrls = [
    "https://static.wixstatic.com/media/4e9673_ea8d802639134ddb956fb341a28561f4~mv2.png/v1/fill/w_304,h_314,al_c,q_80,usm_0.66_1.00_0.01/4e9673_ea8d802639134ddb956fb341a28561f4~mv2.png",
    "https://static.wixstatic.com/media/4e9673_ea8d802639134ddb956fb341a28561f4~mv2.png/v1/fill/w_304,h_314,al_c,q_80,usm_0.66_1.00_0.01/4e9673_ea8d802639134ddb956fb341a28561f4~mv2.png",
    "https://static.wixstatic.com/media/4e9673_3be9bfb05a8c47078c1f40fb0727f53a~mv2.png/v1/fill/w_304,h_314,al_c,q_80,usm_0.66_1.00_0.01/4e9673_3be9bfb05a8c47078c1f40fb0727f53a~mv2.png",
    "https://static.wixstatic.com/media/4e9673_05721e09679945d78b1ce0756698b739~mv2.png/v1/fill/w_304,h_314,al_c,q_80,usm_0.66_1.00_0.01/4e9673_05721e09679945d78b1ce0756698b739~mv2.png",
    "https://static.wixstatic.com/media/4e9673_d6bf152709c5441096d58cb139b164b9~mv2.png/v1/fill/w_304,h_314,al_c,q_80,usm_0.66_1.00_0.01/4e9673_d6bf152709c5441096d58cb139b164b9~mv2.png",
    "https://static.wixstatic.com/media/4e9673_fe9d7c90cde3486bb3b53a60fd60ae54~mv2.png/v1/fill/w_304,h_314,al_c,q_80,usm_0.66_1.00_0.01/4e9673_fe9d7c90cde3486bb3b53a60fd60ae54~mv2.png",
    "https://static.wixstatic.com/media/4e9673_9c815a65d3b6420c92a08b9031e6ac32~mv2.png/v1/fill/w_304,h_314,al_c,q_80,usm_0.66_1.00_0.01/4e9673_9c815a65d3b6420c92a08b9031e6ac32~mv2.png",
    "https://static.wixstatic.com/media/4e9673_65cf5e1bf9a14c66953c0382b37300c4~mv2.png/v1/fill/w_304,h_314,al_c,q_80,usm_0.66_1.00_0.01/4e9673_65cf5e1bf9a14c66953c0382b37300c4~mv2.png",
    "https://static.wixstatic.com/media/4e9673_58efaa4a95b8408393fc22df21bba084~mv2.png/v1/fill/w_304,h_314,al_c,q_80,usm_0.66_1.00_0.01/4e9673_58efaa4a95b8408393fc22df21bba084~mv2.png",
  ];

  useEffect(() => {
    const numPlanets = planetUrls.length;
    let rotation = 0;
    const planetImgs: p5.Image[] = [];

    const radiusX = 520; // X-axis stretch
    const radiusY = 190; // Y-axis stretch
    const sketch = (p: p5) => {
      p.preload = () => {
        for (let i = 0; i < numPlanets; i++) {
          p.loadImage(planetUrls[i], img => {
            planetImgs.push(img);
          });
        }
      }
      p.setup = () => {
        p.createCanvas(800, 400, p.WEBGL);
        try {
          const font = p.loadFont("/NunitoSans.ttf");
          p.textFont(font);
        } catch (e) {
          console.log(e);
        }
       
      };

      const drawCircle = (index: number) => {
        p.push();
        // const radius = 100;
        const rads = (Math.PI * 2) / numPlanets;
        const angle = rads * index - rotation;
        const sin = Math.sin(angle); // Stretch orbit along x-axis
        const cos = Math.cos(angle); // Stretch orbit along y-axis
        const y = radiusX * cos;
        const x = radiusY * sin;
        // const frontThree = (angle > -1 && angle < 0) || (angle < 1 && angle >0);
        let size = 120;
        const factor = 1; // Math.abs(Math.PI - angle) / 4;
        // if (angle > -1 && angle < 0) size *= 1.2;
        // if (angle < 1 && angle > 0) size *= 1.2;
        // if (angle > -1 && angle < 0) factor = angle * 2;
        // if (angle < 1 && angle > 0) factor = angle;
        size *= factor;
        p.translate(x, y, 0);
        p.rotateX(-p.PI / 2 - 0.06);
        // p.text(`${index} factor:${Math.round(Math.abs(Math.PI - angle))}`, 0, 0);
        // p.ellipse(0, 0, size, size);
        // console.log(planetImgs[index]);
        // p.image(planetImgs[index], 0, 0, size, size);
        p.texture(planetImgs[index]);
        p.noStroke();
        p.circle(0, 0, size);
        p.pop();
      };

      p.draw = () => {
        p.clear();

        p.rotateX(p.PI / 2 - 0.06);

        for (let i = 0; i < numPlanets; i++) {
          drawCircle(i);
        }
        // if (rotation > Math.PI) rotation = 0;
        rotation += 0.01;
      };
    };
    if (sketchRef.current === null) return;

    const myP5 = new p5(sketch, sketchRef.current);

    return () => {
      myP5.remove(); // Cleanup when unmounting
    };
  }, []);

  return <div ref={sketchRef} />;
};

export default Planets;
