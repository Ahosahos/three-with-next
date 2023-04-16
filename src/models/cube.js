import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

export default function Cube(props) {
  const mesh = useRef();
  useFrame((state, delta) => (mesh.current.rotation.x += delta));

  return (
    <mesh
      // {...props}
      ref={mesh}
      scale={1}
      onClick={(e) => console.log("clicked")}
      onPointerOver={(e) => console.log("hover")}
      onPointerOut={(e) => console.log("un hover")}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial vertexColors={"hotpink"} color={"yellow"} />
    </mesh>
  );
}
