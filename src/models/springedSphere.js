import { config } from "@react-spring/three";
import React, { useMemo, useRef } from "react";
import { animated, useSpring } from "@react-spring/three";
import { ContactShadows } from "@react-three/drei";

const SpringedSphere = (props) => {
  const sphere = useRef(null);
  const { wobble } = useSpring({
    color: "white",
    config: config.wobbly,
    env: 1,
  });
  return (
    <>
      <animated.mesh scale={wobble}>
        <sphereBufferGeometry args={[1, 64, 64]} ref={sphere} />
        <meshLambertMaterial color={"white"} />
      </animated.mesh>
      <ContactShadows
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -1.6, 0]}
        opacity={0.4}
        width={15}
        height={15}
        blur={2.5}
        far={1.6}
      />
    </>
  );
};

export default SpringedSphere;
