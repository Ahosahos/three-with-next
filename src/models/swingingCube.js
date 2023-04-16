import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function SwingingCube(props) {
  const mesh = useRef();

  useFrame(({ clock }) => {
    mesh.current.rotation.x = Math.sin(clock.getElapsedTime());
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[3, 3, 3]} />
      <meshBasicMaterial color={"yellow"} />
    </mesh>
  );
}
