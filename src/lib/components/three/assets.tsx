import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";

export function Assets() {
  const fileUrl = "/monkeytest.glb";
  const group = useRef<Group>(null!);
  // const colorMap = useLoader(TextureLoader, fileTextUrl);
  const { nodes, materials } = useGLTF(fileUrl);
  console.log(nodes);
  return (
    <group ref={group} castShadow>
      {/* @ts-ignore */}
      <mesh {...nodes.grass1}></mesh>
      {/* @ts-ignore */}
      <mesh {...nodes.grass2}></mesh>
      {/* @ts-ignore */}
      <mesh {...nodes.stone1}></mesh>
      {/* @ts-ignore */}
      <mesh {...nodes.stone2}></mesh>
      {/* @ts-ignore */}
      <mesh {...nodes.stone3}></mesh>
      {/* @ts-ignore */}
      <mesh {...nodes.coconut}></mesh>
      {/* @ts-ignore */}
      <mesh {...nodes.coconut2}></mesh>
      {/* @ts-ignore */}
      <mesh {...nodes.coconut3}></mesh>
      {/* @ts-ignore */}
      <mesh {...nodes.umbrella}></mesh>
      {/* @ts-ignore */}
      <mesh {...nodes.star} />
      {/* @ts-ignore */}
      <mesh {...nodes.chair} />
    </group>
  );
}
