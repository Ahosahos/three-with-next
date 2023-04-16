import SwingingCube from "@/models/swingingCube";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div style={{ margin: "auto", height: "100vh", width: "100vw" }}>
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <SwingingCube />
      </Canvas>
    </div>
  );
  // return (
  //   <>
  //     <Canvas>
  //       {/* mesh + box + material + lights */}
  //       <mesh>
  //         <ambientLight intensity={1} />
  //         <directionalLight color="red" position={[0, 0, 5]} />
  //         <boxGeometry args={[2, 2, 2]} />
  //         <meshStandardMaterial />
  //       </mesh>
  //     </Canvas>
  //   </>
  // );
}
