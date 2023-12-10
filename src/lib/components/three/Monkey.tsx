import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Group, Mesh } from "three";

export function Monkey() {
  const fileUrl = "/monkeytest.glb";
  const mesh = useRef<Mesh>(null!);
  const group = useRef<Group>(null!);
  const { nodes, materials, animations } = useGLTF(fileUrl);
  const { actions } = useAnimations(animations, group);

  console.log(animations);

  useEffect(() => {
    if (actions["no.003"]) {
      actions["no.003"]
        .setEffectiveTimeScale(1)
        .setEffectiveWeight(1)
        .fadeIn(0.1)
        .play().repetitions = 10;
    }
  }, [actions]);

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
