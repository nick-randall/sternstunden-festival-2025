"use client";

import { useEffect, useMemo, useRef } from "react";
import p5 from "p5";

const Planets: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const rootUrl = "https://sternstunde.s3.ap-southeast-2.amazonaws.com/planets/";
  const planets = useMemo(() => ["merkur", "venus", "erde", "mars", "jupiter", "saturn", "uranus", "neptun", "pluto"], []);
  const planetUrls = useMemo(() => planets.map(planet => `${rootUrl}${planet}.png`), [planets]);

  useEffect(() => {
    import("p5").then(p5 => {
      const numPlanets = planetUrls.length;
      let rotation = 0;
      let rotateTo: number | undefined = undefined;
      const planetImgs: p5.Image[] = [];
      const planetSize = 120;
      let currPlanet = 0;
      const angleInterval = (Math.PI * 2) / numPlanets;
      const angles = Array.from({ length: numPlanets }, (_, i) => angleInterval * i);

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
          const g = p as unknown as { _renderer: { GL: WebGLRenderingContext } };
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
            if (Math.abs(rotation) - Math.abs(angle) < 0.1) {
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
          const twoRight = (frontMostIndex + 2) % numPlanets;
          const right = (frontMostIndex + 1) % numPlanets;
          frontmostThreeIndexes = [twoLeft, twoRight, right, left, frontMostIndex];
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
          if (planetImgs.length < 8) return;
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
          if (rotateTo && Math.abs(rotateTo) - Math.abs(rotation) < 0.01) {
            // console.log("rotated to", rotateTo);
            rotateTo = undefined;
            getFrontMost();
          }
          if (rotateTo && rotateTo < rotation) {
            rotation -= 0.02;
          } else if (rotateTo && rotateTo > rotation) {
            rotation += 0.02;
          }
          if (rotation && rotation >= Math.PI * 2) {
            rotation = 0;
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
            currPlanet = (currPlanet - 1 + numPlanets) % numPlanets;
          } else if (p.mouseX > xMiddle) {
            currPlanet = (currPlanet + 1) % numPlanets;
          }
          if (currPlanet === 0) {
            newRotation = Math.PI * 2;
          } else newRotation = angles[currPlanet];
          // if (newRotation && Math.abs(newRotation) >= Math.PI * 2) {
          //   newRotation = 0;
          // }
          console.log("curr rotation", rotation);
          console.log("new rotation", newRotation);
          console.log("curr planet", currPlanet);
          rotateTo = newRotation;
        };
      };

      if (sketchRef.current === null) return;

      const myP5 = new p5.default(sketch, sketchRef.current);

      return () => {
        myP5.remove();
      };
    });
  }, [planetUrls]);

  return <div ref={sketchRef} />;
};

export default Planets;
