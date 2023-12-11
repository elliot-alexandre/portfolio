import { MeshWobbleMaterial } from "@react-three/drei";
import { ObjectMap } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";

export function PalmTree(data: ObjectMap) {
  const group = useRef<Group>(null!);
  const { nodes, materials } = data;

  return (
    <group ref={group} {...nodes.Palm} castShadow>
      <mesh {...nodes.Palm.children[0]} castShadow>
        {/*  @ts-ignore */}
        <MeshWobbleMaterial factor={0.1} color={materials["wood.001"]?.color} />
      </mesh>
      <mesh {...nodes.Palm.children[1]} castShadow>
        <MeshWobbleMaterial
          factor={0.01}
          /*  @ts-ignore */
          color={materials["vegetation.001"]?.color}
        />
      </mesh>
    </group>
  );
}
