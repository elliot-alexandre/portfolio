import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { Group, Mesh } from "three";

export function Monkey() {
  const fileUrl = "/monkey_assets.glb";
  const mesh = useRef<Mesh>(null!);
  const group = useRef<Group>(null!);
  const { nodes, materials, animations } = useGLTF(fileUrl);
  const { actions } = useAnimations(animations, group);
  const [isActive, setState] = useState(true);

  useEffect(() => {
    if (isActive === true) {
      //@ts-ignore
      actions["no.002"]
        .setEffectiveTimeScale(1)
        .setEffectiveWeight(1)
        .fadeIn(0.1)
        .play();
    }
  }, []);

  return (
    <group ref={group}>
      <mesh ref={mesh}>
        <primitive object={nodes.waist} />
        <skinnedMesh
          material={materials["palette.013"]}
          //@ts-ignore
          geometry={nodes.Monky.geometry}
          //@ts-ignore
          skeleton={nodes.Monky.skeleton}
          castShadow
        />
      </mesh>
    </group>
  );
}
