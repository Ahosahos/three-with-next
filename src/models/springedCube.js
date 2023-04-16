import React, { useRef, useState } from "react";
import { useSpring, animated, config } from "@react-spring/three";

export default function SpringedCube(props) {
  const [active, setActive] = useState(false);

  const mesh = useRef();

  const { scale } = useSpring({
    scale: active ? 1.5 : 1,
    config: config.wobbly,
  });

  return (
    <animated.mesh
      // {...props}
      ref={mesh}
      scale={scale}
      onClick={() => setActive(!active)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color={"yellow"} />
    </animated.mesh>
  );
}
