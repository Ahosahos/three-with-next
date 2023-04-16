import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <>
      <Canvas>
        {/* mesh + box + material + lights */}
        <mesh>
          <ambientLight intensity={1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </>
  );
}
