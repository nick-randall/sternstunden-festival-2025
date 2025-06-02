"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, Vector3 } from "three";
import { Suspense, useState } from "react";
import Planet from "./Planet";
import React from "react";
import { useRouter } from "next/navigation";
import { Canvas } from "@react-three/fiber";

const planets = ["merkur", "venus", "erde", "mars", "jupiter", "saturn", "uranus", "neptun", "pluto"];

import useMediaQuery from "./useMediaQuery";

const PlanetScene: React.FC = () => {
  const { screenWidth } = useMediaQuery();
  if (screenWidth === 0) {
    return null;
  }
  let sizeFactor = 1;
  if (screenWidth < 1080) {
    sizeFactor = 0.5;
  }
  if (screenWidth < 768) {
    sizeFactor = 0.35;
  }
  return (
    <Canvas style={{ width: 800 * sizeFactor, height: 600 * sizeFactor }}>
      <MyScene />
    </Canvas>
  );
};

export default PlanetScene;

function MyScene() {
  const [currPlanet, setCurrPlanet] = useState(0);
  const [newPlanet, setNewPlanet] = useState(0);
  const [targetRotation, setTargetRotation] = useState<number | undefined>(undefined);

  const [planetsRotation, setPlanetsRotation] = useState(0);
  const [leftIndex, setLeftIndex] = useState(8);
  const [rightIndex, setRightIndex] = useState(1);

  const [launchedPlanet, setLaunchedPlanet] = useState(-1);
  const [launchedPlanetScale, setLaunchedPlanetScale] = useState(1);

  const router = useRouter();

  const setNewPlanetAndTargetRotation = (index: number) => {
    setNewPlanet(index);
    const circlePart = 1 / planets.length;
    const angleDelta = circlePart * Math.PI * 2;
    const sign = index < currPlanet ? 1 : -1;
    const targetAngle = sign * angleDelta + planetsRotation;
    console.log("Current angle = ", planetsRotation);
    console.log("Target angle = ", targetAngle);
    if (index === 8 && currPlanet === 0) {
      setTargetRotation(angleDelta);
    } else if (index === 0 && currPlanet === 8) {
      setTargetRotation(planetsRotation - angleDelta);
    } else {
      setTargetRotation(targetAngle);
    }
  };

  const setLeftAndRightIndex = (currPlanet: number) => {
    const leftIndex = currPlanet - 1 < 0 ? planets.length - 1 : currPlanet - 1;
    const rightIndex = currPlanet + 1 > planets.length - 1 ? 0 : currPlanet + 1;
    setLeftIndex(leftIndex);
    setRightIndex(rightIndex);
  };

  useFrame((_, delta) => {
    if (targetRotation === undefined) return;
    const threshold = 0.005;
    if (Math.abs(targetRotation - planetsRotation) <= threshold) {
      console.log("Target reached");
      setPlanetsRotation(targetRotation);
      setCurrPlanet(newPlanet);
      setLeftAndRightIndex(newPlanet);
      setTargetRotation(undefined);
    }
    setPlanetsRotation(p => {
      if (targetRotation > planetsRotation) {
        return p + delta;
      }
      return p - delta;
    });
  });
  const distFromCentre = 3;
  const tilt = 2.1;
  const flip = Math.PI;

  const launchPlanet = (index: number) => {
    const planet = planets[index];
    router.push(`/planeten/${planet}`);
    setLaunchedPlanet(index);
  };

  useFrame((_, delta) => {
    if (launchedPlanet !== -1) {
      setLaunchedPlanetScale(p => p + delta);
    }
  });

  const getClickAction = (index: number) => {
    // if(launchedPlanet !== -1 || targetRotation !== undefined) {
    //   return () => {};
    // }
    if (index === leftIndex || index === rightIndex) {
      return () => {
        setNewPlanetAndTargetRotation(index);
      };
    }
    if (index === currPlanet) {
      return () => {
        launchPlanet(index);
      };
    }
    return () => {};
  };

  const texture = useLoader(TextureLoader, `chevron-right.svg`);

  return (
    <>
      <Suspense>
        <group>
      <mesh
      // position={position}
      // rotation={[counterTilt, 0, counterFlip]}
      // onClick={onClick}
       >
      <planeGeometry attach="geometry" args={[2, 2]} />
      <meshBasicMaterial
        attach={"material"}
        map={texture}
        transparent={true}
        alphaTest={0.01}
      />
      {/* <Text fontSize={0.5} position={[0, 1, 0]}>
        {index}
      </Text> */}
    </mesh>
        </group>
        <group position={[0, 5, 0]}>
          <group rotation={[tilt, 0, flip]}>
            {planets.map((planet, index) => {
              const circleDist = index / planets.length;
              const angle = circleDist * Math.PI * 2 + planetsRotation + Math.PI;
              const x = Math.sin(angle) * distFromCentre;
              const y = Math.cos(angle) * distFromCentre;
              return (
                <group key={planet} scale={index === launchedPlanet ? launchedPlanetScale : 1}>
                  <Planet
                    planet={planet}
                    position={new Vector3(x, y - 2, 3)}
                    counterTilt={tilt}
                    counterFlip={flip}
                    index={index}
                    onClick={getClickAction(index)}
                  />
                </group>
              );
            })}
          </group>
        </group>
      </Suspense>
      {/* <directionalLight position={[0, 0, 2]} /> */}
      {/* {newPlanet === currPlanet && (
        <mesh position={[0, -2.7, 0]} rotation={new Euler(-40, 0, 0)}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      )} */}
      {/* <Cube
          position={new Vector3(1, 1, 3)}
          sizes={[1, 1, 1]}
          color="orange"
        />  */}
    </>
  );
}
