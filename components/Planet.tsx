import { useLoader } from "@react-three/fiber";
import { TextureLoader, Vector3 } from "three";
// import { Text } from "@react-three/drei"; // Import Text component

interface PlanetProps {
  planet: string;
  position: Vector3;
  counterTilt: number;
  counterFlip: number;
  onClick?: () => void;
  index: number;
}

const Planet: React.FC<PlanetProps> = ({
  planet,
  position,
  counterTilt,
  counterFlip,
  onClick = () => {},
  // index,
}) => {
  const rootUrl =
    "https://sternstunde.s3.ap-southeast-2.amazonaws.com/planets/";
  const texture = useLoader(TextureLoader, `${rootUrl}${planet}-small.png`);

  return (
    <mesh
      position={position}
      rotation={[counterTilt, 0, counterFlip]}
      onClick={onClick}>
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
  );
};

export default Planet;
