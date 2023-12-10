import { MeshWobbleMaterial, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";

export function PalmTree() {
  const fileUrl = "/monkey8.glb";
  const group = useRef<Group>(null!);
  // const colorMap = useLoader(TextureLoader, fileTextUrl);
  const { nodes, materials } = useGLTF(fileUrl);

  return (
    <group ref={group} {...nodes.Palm} castShadow>
      <mesh {...nodes.Palm.children[0]} castShadow>
        {/*  @ts-ignore */}
        <MeshWobbleMaterial factor={0.1} color={materials["wood.001"]?.color} />
      </mesh>
      <mesh {...nodes.Palm.children[1]} castShadow>
        {/*  @ts-ignore */}
        <meshStandardMaterial color={materials["vegetation.001"]?.color} />
      </mesh>
    </group>
  );
}
