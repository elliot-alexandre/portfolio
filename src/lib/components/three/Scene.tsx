"use client";

import { useMediaQuery } from "@chakra-ui/react";
import { OrbitControls, OrthographicCamera, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Island } from "./Island";
import { Monkey } from "./Monkey";
import { PalmTree } from "./Tree";
import { Assets } from "./assets";

export function SceneMonkeyIsland() {
  const monkeyRef = useRef();
  // const lightRef = useRef();
  // useHelper(lightRef, SpotLightHelper, 1);
  const { nodes } = useGLTF("/monkeytest.glb");
  const targetMonkey = nodes.waist;

  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  const [isLargerThan425] = useMediaQuery("(min-width: 425px)");

  return (
    <>
      <OrbitControls
        enableDamping
        enablePan={false}
        enableZoom={false}
        // minAzimuthAngle={0}
        // maxAzimuthAngle={0}
        minPolarAngle={1.20079}
        maxPolarAngle={1.20079}
        enableRotate={true}
      />
      <OrthographicCamera
        makeDefault
        zoom={isLargerThan1024 ? 200 : isLargerThan425 ? 150 : 100}
        position={[40, 40, 100]}
      ></OrthographicCamera>

      <spotLight
        intensity={10}
        position={[0, 2, 2.2]}
        castShadow
        shadow-mapSize={256}
        power={40}
        target={targetMonkey}
      />

      <directionalLight
        intensity={1.5}
        color={"#fff19f"}
        position={[0, 1, 2]}
      />
      <hemisphereLight
        intensity={0.3}
        color={"fff19f"}
        position={[40, 40, 100]}
      />

      <Suspense>
        <group rotation-y={-2}>
          <Monkey />
          <PalmTree />
          <Island />
          <Assets />
        </group>
      </Suspense>
    </>
  );
}
