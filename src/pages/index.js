import SpringedCube from "@/models/springedCube";
import SwingingCube from "@/models/swingingCube";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import SpringedSphere from "@/models/springedSphere";

export default function Home() {
  return (
    <div
      style={{
        margin: "auto",
        height: "100vh",
        width: "100vw",
        background: "black",
      }}
    >
      {/*setup position to show 3d cube */}
      {/* <Canvas camera={{ position: [3, 3, 7] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <SwingingCube />
        <SpringedCube position={[-5, 0, 0]} />
        <SpringedCube position={[4, 0, 0]} />
      </Canvas> */}
      <Canvas>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 15]} angle={0.3} />
        <Stars />
        <SpringedSphere />
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
