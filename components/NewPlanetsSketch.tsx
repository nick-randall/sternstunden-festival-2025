"use client";
import { useEffect, useMemo, useRef } from "react";
import p5 from "p5";

const NewPlanetsSketch: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const rootUrl = "https://sternstunde.s3.ap-southeast-2.amazonaws.com/planets/";
  const planets = useMemo(() => ["merkur", "venus", "erde", "mars", "jupiter", "saturn", "uranus", "neptun", "pluto"], []);
  const planetUrls = useMemo(() => planets.map(planet => `${rootUrl}${planet}.png`), [planets]);

  useEffect(() => {
    import("p5").then(p5 => {
      const numPlanets = planetUrls.length;
      let rotation = 0;
      const planetImgs: p5.Image[] = [];
      const planetSize = 120;
      let currPlanet = 0;
      let newPlanet = 0;

      const angleInterval = (Math.PI * 2) / numPlanets;
      const angles = Array.from({ length: numPlanets }, (_, i) => angleInterval * i);

      let drawOrder: number[] = [];

      // Set draw order so the images closest to the front are drawn LAST
      const rearrangeImages = () => {
        const order = Array.from({length: numPlanets}, (_, i) => i);
        const oppositePlanet = (currPlanet + 5) % numPlanets;
        // Move opposite planet index to the middle [5, 6, 7, 8, 0, 1, 2, 3, 4]
        const before = order.slice(0, oppositePlanet);
        const rest = order.slice(oppositePlanet);
        const middleAtStart = [...rest, ...before];
        
        // Move alternately add start and end of list to the 
        // start of the new list ==> 5 (start), then 4 (last), 
        // then 6 (first) etc
        const rearranged: number[] = []
        for(let i = 0; i< Math.floor(numPlanets / 2); i++) {
          const top = middleAtStart[i];
          rearranged.push(top)
          const tail = middleAtStart[numPlanets - i - 1];
          rearranged.push(tail)
        }
        rearranged.push(middleAtStart[Math.floor(numPlanets / 2)])

        drawOrder = rearranged;        
      };
      rearrangeImages()

      const radiusX = 520; // X-axis stretch
      const radiusY = 190; // Y-axis stretch
      // let frontmostThreeIndexes = [0, 1, numPlanets - 1];

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

       

        const isCloseTo = (a: number, b: number, tolerance: number) => {
          return Math.abs(a - b) < tolerance;
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

          p.tint(255, 255);
          p.image(planetImgs[index], -planetSize / 2, -planetSize / 2, planetSize, planetSize);
          p.pop();
        };

        p.draw = () => {
          if (planetImgs.length < 8) return;
          p.clear();

          p.rotateX(p.PI / 2 - 0.06); // Tilt entire scene

          for (let i = 0; i < numPlanets; i++) {
            const planetToDraw = drawOrder[i]
            drawCircle(planetToDraw);
          }
          if (newPlanet === currPlanet) return;

          for (let i = 0; i < numPlanets; i++) {
            if (isCloseTo(angles[i], rotation, 0.03)) {
              currPlanet = i;
              rearrangeImages();
            }
          }
          if (currPlanet === newPlanet) return;

          const rotateToAngle = angles[newPlanet];

          if (rotateToAngle > rotation) {
            rotation += 0.02;
          }
          if (rotateToAngle < rotation) {
            rotation -= 0.02;
          }

          if (rotation >= Math.PI * 2) {
            rotation = 0;
          }
        };

        p.mouseClicked = () => {
          const xMiddle = p.width / 2;
          const centrePlanetLeft = xMiddle - planetSize - 20;
          const centrePlanetRight = xMiddle + planetSize + 20;
          console.log("clicked", p.mouseX, centrePlanetLeft, centrePlanetRight);
          if (p.mouseX > centrePlanetLeft && p.mouseX < centrePlanetRight) {
            console.log("clicked on centre planet");
            return;
          }
          if (p.mouseX <= xMiddle) {
            newPlanet = (currPlanet - 1 + numPlanets) % numPlanets;
          } else if (p.mouseX > xMiddle) {
            newPlanet = (currPlanet + 1) % numPlanets;
          }
          console.log("curr planet", currPlanet);
          console.log("new planet", newPlanet);

          console.log("curr rotation", rotation);
          console.log("new rotation", newPlanet && angles[newPlanet]);
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

export default NewPlanetsSketch;
