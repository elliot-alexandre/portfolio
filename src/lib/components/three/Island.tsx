import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

export function Island(props: any) {
  const fileUrl = "/monkey8.glb";
  const mesh: any = useRef<Mesh>(null!);
  const { nodes, materials } = useGLTF(fileUrl);
  const group = useRef();

  return (
    <group ref={group} {...nodes.Ground} {...props} receiveShadow>
      {/* @ts-ignore */}
      <mesh {...nodes.Ground.children[0]} receiveShadow></mesh>
      {/* @ts-ignore */}
      <mesh {...nodes.Ground.children[1]}></mesh>
    </group>
  );
}
