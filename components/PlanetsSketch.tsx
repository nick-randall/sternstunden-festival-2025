"use client";

import { useEffect, useMemo, useRef } from "react";
import p5 from "p5";
import { get } from "http";

const Planets: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const planetUrls = useMemo(
    () => [
      "/planets/merkur.png",
      "/planets/venus.png",
      "/planets/erde.png",
      "/planets/mars.png",
      "/planets/jupiter.png",
      "/planets/saturn.png",
      "/planets/uranus.png",
      "/planets/neptun.png",
      "/planets/pluto.png",
      // "/planets/alpha.png"
      // "https://static.wixstatic.com/media/4e9673_ea8d802639134ddb956fb341a28561f4~mv2.png/v1/fill/w_304,h_314,al_c,q_80,usm_0.66_1.00_0.01/4e9673_ea8d802639134ddb956fb341a28561f4~mv2.png",
      // "https://static.wixstatic.com/media/4e9673_86378abffefa418896d694960dcc2139~mv2.png/v1/fill/w_304,h_314,al_c,q_80,usm_0.66_1.00_0.01/4e9673_86378abffefa418896d694960dcc2139~mv2.png",
      // "https://static.wixstatic.com/media/4e9673_3be9bfb05a8c47078c1f40fb0727f53a~mv2.png/v1/fill/w_304,h_314,al_c,q_80,usm_0.66_1.00_0.01/4e9673_3be9bfb05a8c47078c1f40fb0727f53a~mv2.png",
      // "https://static.wixstatic.com/media/4e9673_05721e09679945d78b1ce0756698b739~mv2.png/v1/fill/w_304,h_314,al_c,q_80,usm_0.66_1.00_0.01/4e9673_05721e09679945d78b1ce0756698b739~mv2.png",
      // "https://static.wixstatic.com/media/4e9673_d6bf152709c5441096d58cb139b164b9~mv2.png/v1/fill/w_304,h_314,al_c,q_80,usm_0.66_1.00_0.01/4e9673_d6bf152709c5441096d58cb139b164b9~mv2.png",
      // "https://static.wixstatic.com/media/4e9673_fe9d7c90cde3486bb3b53a60fd60ae54~mv2.png/v1/fill/w_304,h_314,al_c,q_80,usm_0.66_1.00_0.01/4e9673_fe9d7c90cde3486bb3b53a60fd60ae54~mv2.png",
      // "https://static.wixstatic.com/media/4e9673_9c815a65d3b6420c92a08b9031e6ac32~mv2.png/v1/fill/w_304,h_314,al_c,q_80,usm_0.66_1.00_0.01/4e9673_9c815a65d3b6420c92a08b9031e6ac32~mv2.png",
      // "https://static.wixstatic.com/media/4e9673_65cf5e1bf9a14c66953c0382b37300c4~mv2.png/v1/fill/w_304,h_314,al_c,q_80,usm_0.66_1.00_0.01/4e9673_65cf5e1bf9a14c66953c0382b37300c4~mv2.png",
      // "https://static.wixstatic.com/media/4e9673_58efaa4a95b8408393fc22df21bba084~mv2.png/v1/fill/w_304,h_314,al_c,q_80,usm_0.66_1.00_0.01/4e9673_58efaa4a95b8408393fc22df21bba084~mv2.png",
    ],
    []
  );

  useEffect(() => {
    const numPlanets = planetUrls.length;
    let rotation = 0;
    let rotateTo: number | undefined = undefined;
    const planetImgs: p5.Image[] = [];
    const planetSize = 120;

    const radiusX = 520; // X-axis stretch
    const radiusY = 190; // Y-axis stretch
    let frontmostThreeIndexes = [0, 1, numPlanets - 1];

    const sketch = (p: p5) => {
      p.preload = () => {
        for (let i = 0; i < numPlanets; i++) {
          p.loadImage(planetUrls[i], img => {
            planetImgs.push(img);
          });
        }
      };
      p.setup = () => {
        p.createCanvas(800, 500, p.WEBGL);
        p.setAttributes("alpha", true); // Enables transparency
        const g = p as { _renderer: { GL: WebGLRenderingContext } };
        const gl = g._renderer.GL; // ✅ Correct way to access WebGL in p5.js
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.disable(gl.DEPTH_TEST); // Fix transparency overlap issues
      };

      const getFrontMost = () => {
        let frontMostIndex = 0;
        for (let i = 0; i < numPlanets; i++) {
          const rads = (Math.PI * 2) / numPlanets;
          const angle = rads * i;
          console.log("diff", rotation - angle);
          if (Math.abs(angle - rotation) < 0.1) {
            frontMostIndex = i;
            console.log("frontmost", frontMostIndex);
            break;
          }
        }
        let left = frontMostIndex - 1;
        if (left < 0) {
          left = numPlanets - 1;
        }

        let twoLeft = frontMostIndex - 2;
        if (twoLeft < 0) {
          twoLeft = numPlanets - 2;
        }
        const twoRight  = (frontMostIndex + 2) % numPlanets;
        const right = (frontMostIndex + 1) % numPlanets;
        frontmostThreeIndexes = [ twoLeft, twoRight,   right, left, frontMostIndex];
        console.log("frontmost three", frontmostThreeIndexes);
      };

      const drawCircle = (index: number) => {
        p.push();
        const rads = (Math.PI * 2) / numPlanets;
        const angle = rads * index - rotation;
        const sin = Math.sin(angle); // Stretch orbit along x-axis
        const cos = Math.cos(angle); // Stretch orbit along y-axis
        const y = radiusX * cos;
        const x = radiusY * sin;

        p.translate(x, y, 0);
        p.rotateX(-p.PI / 2 - 0.06);

        // p.texture(planetImgs[index]);
        // p.noStroke();
        // p.circle(0, 0, planetSize);
        p.tint(255, 255);
        p.image(planetImgs[index], -planetSize / 2, -planetSize / 2, planetSize, planetSize);
        p.pop();
      };

      p.draw = () => {
        p.clear();

        p.rotateX(p.PI / 2 - 0.06);

        for (let i = 0; i < numPlanets; i++) {
          if (frontmostThreeIndexes.includes(i)) {
            continue;
          }
          drawCircle(i);
        }
        for (let i = 0; i < frontmostThreeIndexes.length; i++) {
          drawCircle(frontmostThreeIndexes[i]);
        }

        if (rotation > Math.PI * 2) {
          rotation = 0;
        }
        if (rotateTo && Math.abs(rotateTo - rotation) < 0.1) {
          console.log("rotated to", rotateTo);
          rotation = rotateTo;
          rotateTo = undefined;
          getFrontMost();
        }
        if (rotateTo && rotateTo < rotation) {
          rotation -= 0.02;
        } else if (rotateTo && rotateTo > rotation) {
          rotation += 0.02;
        }
      };
      p.mouseClicked = () => {
        // if (rotateTo !== undefined) {
        //   console.log("already rotating");
        //   return;
        // }
        const xMiddle = p.width / 2;
        const centrePlanetLeft = xMiddle - planetSize - 20;
        const centrePlanetRight = xMiddle + planetSize + 20;
        let newRotation = undefined;
        console.log("clicked", p.mouseX, centrePlanetLeft, centrePlanetRight);
        if (p.mouseX > centrePlanetLeft && p.mouseX < centrePlanetRight) {
          console.log("clicked on centre planet");
          return;
        }
        if (p.mouseX <= xMiddle) {
          newRotation = rotation - (Math.PI * 2) / numPlanets;
        } else if (p.mouseX > xMiddle) {
          newRotation = rotation + (Math.PI * 2) / numPlanets;
        }
        console.log("new rotation", newRotation);
        if (newRotation && Math.abs(newRotation) >= Math.PI * 2) {
          newRotation = 0;
        }
        rotateTo = newRotation;
      };
    };

    if (sketchRef.current === null) return;

    const myP5 = new p5(sketch, sketchRef.current);

    return () => {
      myP5.remove(); // Cleanup when unmounting
    };
  }, [planetUrls]);

  return <div ref={sketchRef} />;
};

export default Planets;
