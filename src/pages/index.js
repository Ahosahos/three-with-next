import SpringedCube from "@/models/springedCube";
import SwingingCube from "@/models/swingingCube";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div style={{ margin: "auto", height: "100vh", width: "100vw" }}>
      {/*setup position to show 3d cube */}
      <Canvas camera={{ position: [3, 3, 7] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        {/* <SwingingCube /> */}
        <SpringedCube />
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
