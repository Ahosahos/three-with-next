import React, { useRef, useState } from "react";
import { useSpring, animated, config } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";

const setOfColors = ["green", "red", "hotpink", "purple", "blue"];
const colorLength = setOfColors.length;

export default function SpringedCube(props) {
  const [active, setActive] = useState(false);
  const [hovered, setHover] = useState(false);
  const mesh = useRef();
  const [curIdxColor, setCurIdxColor] = useState(0);

  const { scale } = useSpring({
    scale: active ? 1.5 : 1,
    config: config.wobbly,
  });

  const onHover = () => {
    setCurIdxColor(Math.floor(Math.random() * colorLength));
    setHover(true);
  };

  useFrame(({ clock }) => {
    mesh.current.rotation.x = Math.cos(clock.getElapsedTime());
    mesh.current.rotation.y = Math.cos(clock.getElapsedTime());
  });

  return (
    <animated.mesh
      {...props}
      ref={mesh}
      scale={scale}
      onClick={() => setActive(!active)}
      onPointerOver={onHover}
      onPointerOut={(e) => setHover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color={hovered ? setOfColors[curIdxColor] : "yellow"}
      />
    </animated.mesh>
  );
}
