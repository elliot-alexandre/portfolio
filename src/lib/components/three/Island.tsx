import { ObjectMap } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";

export function Island(data: ObjectMap) {
  const groupRef: any = useRef<Group>(null!);
  const { nodes, materials } = data;

  return (
    <group ref={groupRef} {...nodes.Ground} receiveShadow>
      {/* @ts-ignore */}
      <mesh {...nodes.Ground.children[0]} receiveShadow></mesh>
      {/* @ts-ignore */}
      <mesh {...nodes.Ground.children[1]}></mesh>
    </group>
  );
}
