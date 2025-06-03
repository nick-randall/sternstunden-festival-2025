import React, { FC } from "react";
import * as THREE from "three";
interface ThreeDChevronProps {
  facesRight?: boolean;
  texture: THREE.Texture;
  handleClick: () => void;
  position: [number, number, number];
}
 

const ThreeDChevron: FC<ThreeDChevronProps> = ({facesRight, texture, handleClick, position}) => {
  return (
    <mesh
      position={position}
      scale={[0.4, 0.4, 0.4]}
      rotation={[0, 0, facesRight ? 0 : Math.PI]}
      onClick={handleClick}
      onPointerOver={() => { document.body.style.cursor = "pointer"; }}
      onPointerOut={() => { document.body.style.cursor = "auto"; }}
    >
      <planeGeometry attach="geometry" args={[2, 2]} />
      <meshBasicMaterial attach={"material"} map={texture} transparent={true} alphaTest={0.01} />
    </mesh>
  );
};

export default ThreeDChevron;